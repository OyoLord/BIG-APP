import BackButton from '../components/BackButton';

/**
 * Lecteur Audio simple utilisant l'élément HTML5 <audio>.  Pour utiliser
 * votre propre fichier, remplacez la valeur de l'attribut `src` par le
 * chemin de votre fichier audio dans le dossier `public` ou `src/assets`.
 */
export default function AudioPlayer() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <BackButton />
      <h2 className="mb-6 text-3xl md:text-4xl font-neon text-neon-green drop-shadow-[0_0_10px_rgba(0,255,136,0.7)]">
        Lecteur Audio
      </h2>
      <audio
        controls
        className="w-full max-w-md bg-gothic-surface rounded-lg shadow-neon"
      >
        {/* Remplacez 'votre-fichier-audio.mp3' par le chemin de votre
            fichier audio (par exemple /audio/mon-theme.mp3). */}
        <source src="/votre-fichier-audio.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas la lecture audio.
      </audio>
    </div>
  );
}