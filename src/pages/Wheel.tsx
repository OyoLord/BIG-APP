import { useState } from 'react';
import BackButton from '../components/BackButton';

/**
 * Roue de la Fortune: un mini‑jeu simple qui sélectionne un symbole au hasard.
 * La roue est dessinée à l'aide d'un dégradé conique et tourne lorsqu'on
 * clique sur le bouton.  Après l'animation, une alerte indique le résultat.
 */
export default function Wheel() {
  // Angle accumulé pour la rotation.  Nous stockons l'angle total plutôt
  // qu'un angle relatif afin de maintenir la continuité entre les tours.
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);

  // Les segments de la roue; vous pouvez modifier ces valeurs pour
  // personnaliser les récompenses.
  const segments = [
    '💀',
    '🦇',
    '🕸️',
    '🎁',
    '🎃',
    '👻',
    '🧙‍♀️',
    '💰',
  ];

  // Définition du dégradé conique pour la roue.  Chaque segment occupe
  // exactement 45 degrés (360/8) et alterne entre trois couleurs flashy.
  const gradient = [
    '#9900ff',
    '#00ff88',
    '#00ffff',
    '#ff00ff',
    '#00ff88',
    '#00ffff',
    '#9900ff',
    '#ff00ff',
  ].reduce((acc, color, idx) => {
    const start = idx * 45;
    const end = (idx + 1) * 45;
    return acc + `${color} ${start}deg ${end}deg,`;
  }, '').slice(0, -1);

  // Fonction de rotation.  Calcule un angle aléatoire et ajoute des
  // rotations complètes pour une animation plus longue.  Lorsque
  // l'animation se termine, on calcule l'indice du segment sur lequel
  // l'aiguille se pose.
  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    const spins = Math.floor(Math.random() * 4) + 4; // de 4 à 7 tours
    const randomOffset = Math.floor(Math.random() * 360);
    const spinAngle = spins * 360 + randomOffset;
    setAngle(prev => prev + spinAngle);
    // Durée alignée sur la transition CSS (5 secondes)
    setTimeout(() => {
      setSpinning(false);
      const finalAngle = (angle + spinAngle) % 360;
      // Calculer l'indice en tenant compte de l'inversion (l'aiguille est en haut)
      const index = Math.floor(((360 - finalAngle) % 360) / 45);
      const result = segments[index];
      alert(`Résultat : ${result}`);
    }, 5000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <BackButton />
      <h2 className="mb-6 text-3xl md:text-4xl font-neon text-neon-yellow drop-shadow-[0_0_10px_rgba(255,255,0,0.7)]">
        Roue de la Fortune
      </h2>
      <div className="relative w-64 h-64 md:w-72 md:h-72">
        {/* La roue elle‑même.  La propriété style applique l'angle de rotation et le dégradé conique. */}
        <div
          className="w-full h-full rounded-full border-4 border-neon-blue shadow-neon transition-transform duration-[5000ms] ease-out"
          style={{ transform: `rotate(${angle}deg)`, backgroundImage: `conic-gradient(${gradient})` }}
        ></div>
        {/* L'aiguille de la roue (un simple triangle) */}
        <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-neon-green"></div>
        {/* Les symboles au centre de chaque segment */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl md:text-5xl font-bold drop-shadow-neon animate-pulse select-none">
            🎲
          </div>
        </div>
      </div>
      <button
        onClick={handleSpin}
        disabled={spinning}
        className="mt-10 px-8 py-4 bg-neon-pink text-black rounded-full font-bold uppercase shadow-neon hover:scale-105 transition-transform disabled:opacity-50"
      >
        {spinning ? 'En cours…' : 'Tourner'}
      </button>
    </div>
  );
}