import BackButton from '../components/BackButton';

/**
 * Lecteur Vidéo simple utilisant l'élément HTML5 <video>.  Pour utiliser
 * votre propre fichier, remplacez l'URL dans l'attribut `src` par le
 * chemin de votre vidéo dans le dossier `public` ou `src/assets`.
 */
export default function VideoPlayer() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <BackButton />
      <h2 className="mb-6 text-3xl md:text-4xl font-neon text-neon-blue drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
        Lecteur Vidéo
      </h2>
      <video
        controls
        className="w-full max-w-3xl bg-black rounded-lg shadow-neon"
      >
        {/* Remplacez 'votre-fichier-video.mp4' par le chemin de votre
            fichier vidéo (par exemple /videos/mon-film.mp4). */}
        <source src="/votre-fichier-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  );
}