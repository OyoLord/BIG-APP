import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Wheel from './pages/Wheel';
import AudioPlayer from './pages/AudioPlayer';
import VideoPlayer from './pages/VideoPlayer';
import PdfViewer from './pages/PdfViewer';

// The top‑level component sets up routing for the entire application.  Each
// route corresponds to one of the pages described in the specifications.
export default function App() {
  return (
    <Router>
      {/* A full height container to ensure pages fill the viewport */}
      <div className="min-h-screen bg-gothic-background text-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/wheel" element={<Wheel />} />
          <Route path="/audio" element={<AudioPlayer />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/pdf" element={<PdfViewer />} />
        </Routes>
      </div>
    </Router>
  );
}