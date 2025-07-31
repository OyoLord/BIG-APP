import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create the root React node and render our application.  React.StrictMode
// helps catch potential problems during development.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);