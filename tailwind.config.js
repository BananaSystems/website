/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/*.html', './docs/js/*.js'],
  theme: {
    extend: {
      keyframes: {
        'open-menu' : {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu' : 'open-menu 0.3s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

