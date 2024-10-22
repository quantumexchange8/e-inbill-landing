/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], 
      },
      colors: {
        primary: {
            50: '#', // this primary
            100: '#', //this secondary
        },
      },
    },
    color: {
      primary: '#0046BA',
    }
  },
  plugins: [],
}
