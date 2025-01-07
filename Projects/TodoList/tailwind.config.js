/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-change': 'gradientChange 10s ease infinite',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite',
        'scale-up': 'scaleUp 0.5s ease-out',
        'bounce': 'bounce 0.5s ease-in-out',
        'fade-in': 'fadeIn 1s ease-in',
        'fade-out': 'fadeOut 1s ease-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'shake': 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        gradientChange: {
          '0%': { background: 'linear-gradient(45deg, #ff6b6b, #f1c40f)' },
          '25%': { background: 'linear-gradient(45deg, #f1c40f, #2ecc71)' },
          '50%': { background: 'linear-gradient(45deg, #2ecc71, #3498db)' },
          '75%': { background: 'linear-gradient(45deg, #3498db, #9b59b6)' },
          '100%': { background: 'linear-gradient(45deg, #9b59b6, #ff6b6b)' },
        },
        pulseGlow: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 20px rgba(255, 255, 255, 1)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        bounce: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '75%': { transform: 'translateX(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
