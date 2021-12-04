module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Poppins', 'sans-serif']
      },
      colors: { 
        'page-black':'#121212'
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
  plugins: [require('tailwind-scrollbar-hide'),require('@tailwindcss/typography'),]
}
