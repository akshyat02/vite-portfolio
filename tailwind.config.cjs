/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: "Poppins",
        Pacifico: "Pacifico",
      }
    },
    screens: {
      'md': '830px'
    },
  },
  plugins: [],
}
