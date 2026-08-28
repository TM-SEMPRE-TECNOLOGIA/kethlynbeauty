/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          nude: '#FDFBF9',
          surface: '#FAF7F4',
          sand: '#EFE8E2',
          rosegold: '#E2C7B8',
          gold: '#C5A880',
          goldLight: '#DFC4A2',
          goldDark: '#A6845B',
          espresso: '#1B1514',
          dark: '#140F0E',
          muted: '#6E6764',
          mutedLight: '#A39994',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        display: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(27, 21, 20, 0.07)',
        'luxury-hover': '0 25px 50px -12px rgba(197, 168, 128, 0.25)',
        'gold-glow': '0 0 25px rgba(197, 168, 128, 0.35)',
        'inner-glow': 'inset 0 0 20px rgba(197, 168, 128, 0.1)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
