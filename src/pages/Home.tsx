import { Link } from 'react-router-dom';
// Import our home background image.  This image lives in
// src/assets/home-bg.png and provides the swirling neon feel on the
// landing page.
import homeBg from '../assets/home-bg.png';

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <h1 className="text-5xl md:text-6xl font-neon text-neon-pink mb-8 drop-shadow-[0_0_10px_rgba(255,0,255,0.7)]">
        Gothic&nbsp;Tools
      </h1>
      <p className="mb-10 max-w-xl text-lg md:text-xl leading-relaxed">
        Bienvenue dans notre application kitsch et flashy, où les ténèbres
        rencontrent les néons. Explorez nos outils ludiques et laissez-vous
        surprendre.
      </p>
      <Link
        to="/tools"
        className="px-8 py-4 bg-neon-green text-black rounded-full font-bold uppercase tracking-wide shadow-neon transition-transform transform hover:scale-105 animate-pulse"
      >
        Entrer
      </Link>
    </div>
  );
}