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
      clipPath: {
        'v-shape': 'polygon(50% 100%, 100% 0, 0 0)',
      },
      boxShadow: {
        'submit' : '2px 4px 4px 0px rgba(0, 0, 0, 0.50)',
      },
    },
    color: {
      primary: '#0046BA',
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-v-shape': {
          'clip-path': 'polygon(50% 100%, 100% 0, 0 0)',
        },
      }

      addUtilities(newUtilities, ['responsive'])
    },
    
  ],
}


