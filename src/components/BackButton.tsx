import { Link } from 'react-router-dom';

/**
 * A reusable back button component.  It uses simple styling to stand out
 * against the dark background and gently animates on hover.  The
 * component always navigates back to the tool selection page.
 */
export default function BackButton() {
  return (
    <div className="absolute top-4 left-4">
      <Link
        to="/tools"
        className="flex items-center text-neon-blue hover:text-neon-green font-bold transition-colors"
      >
        <span className="mr-2">←</span> Retour
      </Link>
    </div>
  );
}