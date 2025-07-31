import BackButton from '../components/BackButton';

/**
 * Visionneuse PDF utilisant un iframe.  Les navigateurs modernes peuvent
 * afficher les PDF nativement.  Remplacez simplement le chemin dans
 * l'attribut `src` pour pointer vers votre propre document.
 */
export default function PdfViewer() {
  return (
    <div className="relative flex flex-col items-center min-h-screen p-4">
      <BackButton />
      <h2 className="mb-6 text-3xl md:text-4xl font-neon text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,255,0.7)]">
        Visionneuse PDF
      </h2>
      <div className="w-full flex-1 flex items-center justify-center">
        <iframe
          src="/votre-fichier.pdf"
          className="w-full h-[80vh] max-w-4xl border border-neon-blue rounded-md shadow-neon"
          title="Visionneuse PDF"
        ></iframe>
      </div>
    </div>
  );
}