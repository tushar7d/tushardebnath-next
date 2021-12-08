const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   
  theme: {
    extend: {
      fontFamily:{
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans]
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
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/typography'),]
}
