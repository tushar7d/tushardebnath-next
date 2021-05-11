module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'muted-blue': '#C0E4FE',
        'muted-green': '#BDF4D6',
        'muted-red': '#FFD9D7',
        'muted-purple': '#D5D4F5',
        'muted-yellow': '#FEFAF0',
        'muted-gray': '#EEEFF2',
      },
      typography:{
        DEFAULT:{
          css:{
            a:{
              textDecoration: "none"
            }
          }
        }
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
