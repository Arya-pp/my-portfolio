/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',       // ✅ app directory
    './src/components/**/*.{js,ts,jsx,tsx}', // ✅ components directory
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0f0f23',
        'dark-secondary': '#1a1a2e',
        'purple-accent': '#8b5cf6',
        'purple-light': '#a78bfa',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
