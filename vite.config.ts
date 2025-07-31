import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Vite configuration with React and PWA support.  The PWA plugin
// automatically generates a service worker and references the icons
// defined below.  Updating the manifest here will also update the
// generated manifest in the build output.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Gothic Tools App',
        short_name: 'GothicTools',
        description: 'Une application web dark/gothique kitsch avec divers outils',
        theme_color: '#9900ff',
        background_color: '#0a0a0b',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});