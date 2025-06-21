/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)', 'sans-serif'],
        pt: ['var(--font-pt)', 'sans-serif'],
      },
      colors: {
        footerTop: '#DEDEDE',
        footerBottom: '#21272E',
      },
    },
  },
  plugins: [],
}
