/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      colors: {
        winter: {
          50: '#f0f8ff',
          100: '#e6f2ff',
          200: '#b3d9ff',
          300: '#80bfff',
          400: '#4da6ff',
          500: '#1a8cff',
          600: '#0073e6',
          700: '#005cb3',
          800: '#004080',
          900: '#00264d'
        },
        cosmic: {
          50: '#1a1a2e',
          100: '#16213e',
          200: '#0f3460',
          300: '#537895',
          400: '#7090b0',
          500: '#8baed1',
          600: '#a6c1e3',
          700: '#c1d5f0',
          800: '#dce9f9',
          900: '#f0f4f8'
        },
        glass: {
          primary: 'rgba(255, 255, 255, 0.1)',
          secondary: 'rgba(255, 255, 255, 0.05)',
        }
      },
      backgroundImage: {
        'winter-gradient': 'linear-gradient(135deg, var(--winter-500) 0%, var(--winter-800) 100%)',
        'cosmic-gradient': 'linear-gradient(to right, var(--cosmic-50) 0%, var(--cosmic-200) 100%)',
        'snow-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)',
        'aurora-gradient': 'linear-gradient(45deg, var(--winter-900), var(--winter-500), var(--winter-400), var(--winter-300))',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
      },
      keyframes: {
        snowfall: {
          '0%': { transform: 'translateY(-100%) rotate(0deg)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }
        }
      },
      animation: {
        snowfall: 'snowfall 15s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'frost': '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.2)',
      }
    }
  },
  plugins: [
    function({ addComponents, addUtilities, theme }) {
      addComponents({
        '.glass-card': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: theme('borderRadius.xl'),
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: theme('boxShadow.glass'),
        },
        '.frost-panel': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: theme('borderRadius.2xl'),
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: theme('boxShadow.frost'),
        }
      });

      addUtilities({
        '.text-shadow-glow': {
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
        },
        '.backdrop-blur-xs': {
          backdropFilter: 'blur(2px)'
        },
        '.backdrop-blur-2xl': {
          backdropFilter: 'blur(40px)'
        }
      });
    }
  ]
};