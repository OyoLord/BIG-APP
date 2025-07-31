/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          // Flashy neon palette used throughout the app.  Feel free to
          // tweak these values to suit your own tastes.
          pink: '#FF00FF',
          blue: '#00FFFF',
          green: '#00FF88',
          yellow: '#FFFF00'
        },
        gothic: {
          // Dark surfaces and accents for a goth atmosphere.
          background: '#0a0a0b',
          surface: '#1e1e1f',
          accent: '#9900ff'
        }
      },
      fontFamily: {
        // Custom fonts from Google Fonts; make sure these
        // families are imported in index.html.
        gothic: ['"UnifrakturCook"', 'cursive'],
        neon: ['"Press Start 2P"', 'cursive']
      },
      boxShadow: {
        // A dramatic glow used for buttons and cards.
        neon: '0 0 10px 3px rgba(255,0,255,0.6), 0 0 20px 8px rgba(0,255,255,0.5)'
      }
    }
  },
  plugins: []
};