/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./**/*.{liquid,json}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair', 'sans-serif']
      } //end of fontFamily
    },
  },
  plugins: [],
}

