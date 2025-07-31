import { Link } from 'react-router-dom';

// A simple representation of each tool in the menu.  Feel free to
// customize the titles or add additional tools later on.
const tools = [
  {
    path: '/wheel',
    title: 'Roue de la Fortune',
    icon: '🎡',
  },
  {
    path: '/audio',
    title: 'Lecteur Audio',
    icon: '🔊',
  },
  {
    path: '/video',
    title: 'Lecteur Vidéo',
    icon: '🎬',
  },
  {
    path: '/pdf',
    title: 'Visionneuse PDF',
    icon: '📄',
  },
];

export default function Tools() {
  return (
    <div className="min-h-screen flex flex-col py-8">
      <header className="text-center mb-6 px-4">
        <h2 className="text-3xl md:text-4xl font-neon text-neon-blue drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
          Choisissez un outil
        </h2>
      </header>
      <main className="flex-1 grid grid-cols-2 gap-4 px-4 md:px-8 max-w-4xl mx-auto">
        {tools.map(({ path, title, icon }) => (
          <Link
            key={path}
            to={path}
            className="bg-gothic-surface border border-neon-pink rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-neon hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <div className="text-5xl mb-3 animate-pulse select-none">{icon}</div>
            <span className="font-bold text-lg md:text-xl">{title}</span>
          </Link>
        ))}
      </main>
    </div>
  );
}