/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0 2em #646cffaa',
        '3xl-lit': '0 0 2em #325cffaa'
      }
    },
  },
  plugins: [],
}
