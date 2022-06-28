/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**.{html,css,js}'],
  theme: {
    extend: {
      animation: {
        'slow-spin': 'spin 7s linear infinite',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: 'dark',
  }
}
