/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Inter':['Inter','sans-serif'],
        'LDeca':['Lexend Deca','sans-serif']
      },
      screens:{
        'Tablet':{'max':'769px'}
      },
      colors:{
        'SoftViolet':'hsl(277, 64%, 61%)',
        'White':'hsl(0, 0%, 100%)',
        'VeryDarkBlue':'hsl(233, 47%, 7%)',
        'DarkBlue':'hsl(244, 38%, 16%)',
        'STWP':'hsla(0, 0%, 100%, 0.75)',
        'STWH':'hsla(0, 0%, 100%, 0.6)'
      },
      backgroundColor:{
        'SoftViolet':'hsl(277, 64%, 61%)',
        'White':'hsl(0, 0%, 100%)',
        'VeryDarkBlue':'hsl(233, 47%, 7%)',
        'DarkBlue':'hsl(244, 38%, 16%)',
        'STWP':'hsla(0, 0%, 100%, 0.75)',
        'STWH':'hsla(0, 0%, 100%, 0.6)'
      }
    },
  },
  plugins: [],
}

