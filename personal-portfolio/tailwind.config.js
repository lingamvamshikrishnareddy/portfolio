/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        // Expanded color palette with more gradient options
        colors: {
          // Existing colors...
          'winter': {
            50: '#f0f8ff',   // Very light blue (snow-like)
            100: '#e6f2ff',  // Light blue
            200: '#b3d9ff',  // Soft blue
            300: '#80bfff',  // Medium blue
            400: '#4da6ff',  // Vibrant blue
            500: '#1a8cff',  // Deep blue
            600: '#0073e6',  // Dark blue
            700: '#005cb3',  // Navy blue
            800: '#004080',  // Deep navy
            900: '#00264d'   // Almost black blue
          },
          'cosmic': {
            50: '#1a1a2e',   // Dark background
            100: '#16213e',  // Deep navy
            200: '#0f3460',  // Rich navy
            300: '#537895',  // Muted blue-gray
            400: '#7090b0',  // Soft blue-gray
            500: '#8baed1',  // Light blue-gray
            600: '#a6c1e3',  // Pastel blue
            700: '#c1d5f0',  // Very light blue
            800: '#dce9f9',  // Almost white blue
            900: '#f0f4f8'   // Lightest blue-gray
          }
        },
  
        // Enhanced gradient backgrounds
        backgroundImage: {
          // Existing gradients...
          'winter-gradient': 'linear-gradient(135deg, #1a8cff 0%, #004080 100%)',
          'cosmic-gradient': 'linear-gradient(to right, #1a1a2e 0%, #0f3460 100%)',
          'snow-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)',
          'aurora-gradient': 'linear-gradient(45deg, #00264d, #1a8cff, #4da6ff, #80bfff)',
        },
  
        // Snowfall and Three.js inspired animations
        keyframes: {
          // Existing keyframes...
          snowfall: {
            '0%': { 
              transform: 'translateY(-100%)',
              opacity: '0'
            },
            '100%': { 
              transform: 'translateY(100vh)',
              opacity: '1'
            }
          },
          'three-float': {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { 
              transform: 'translateY(-15px) rotate(5deg)',
              opacity: '0.9'
            }
          },
          'cosmic-pulse': {
            '0%, 100%': { 
              transform: 'scale(1)',
              boxShadow: '0 0 10px rgba(26, 38, 62, 0.3)'
            },
            '50%': { 
              transform: 'scale(1.05)',
              boxShadow: '0 0 20px rgba(83, 120, 149, 0.5)'
            }
          }
        },
  
        // New animation classes
        animation: {
          // Existing animations...
          'snowfall': 'snowfall 10s linear infinite',
          'three-float': 'three-float 4s ease-in-out infinite',
          'cosmic-pulse': 'cosmic-pulse 3s infinite'
        },
  
        // Three.js and WebGL related utilities
        transformOrigin: {
          'three-center': 'center center',
        },
  
        // Enhanced box shadows for depth
        boxShadow: {
          // Existing shadows...
          'three-depth': '0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.1)',
          'cosmic-glow': '0 0 30px rgba(26, 38, 62, 0.4), 0 0 15px rgba(83, 120, 149, 0.3)'
        }
      }
    },
    plugins: [
      // Custom plugin for snow and Three.js utilities
      function({ addUtilities, theme }) {
        const snowUtilities = {
          '.snow-container': {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: '9999',
            overflow: 'hidden'
          },
          '.snowflake': {
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            animation: 'snowfall 10s linear infinite',
            opacity: '0.7'
          },
          '.three-scene': {
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s ease-in-out'
          }
        };
        addUtilities(snowUtilities);
      }
    ],
    variants: {
      extend: {
        // Additional variants for richer interactions
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        transform: ['responsive', 'hover', 'focus', 'group-hover'],
        animation: ['hover', 'group-hover']
      }
    }
  };