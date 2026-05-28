/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5F0',
        beige: '#F5EFE6',
        cream: '#FFFDF9',
        charcoal: '#1A1A1A',
        'warm-brown': '#8B6F47',
        taupe: '#C4A882',
        'warm-gray': '#9E8E7E',
        'warm-border': '#E8DDD4',
        'text-secondary': '#6B6560',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'warm-sm': '0 2px 12px rgba(139, 111, 71, 0.08)',
        'warm-md': '0 4px 24px rgba(139, 111, 71, 0.12)',
        'warm-lg': '0 8px 40px rgba(139, 111, 71, 0.16)',
        'warm-xl': '0 20px 60px rgba(139, 111, 71, 0.20)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
