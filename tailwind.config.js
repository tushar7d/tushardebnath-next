module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    fontFamily: {
      sans: [ 'Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
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
  plugins: [require('@tailwindcss/typography'),require('tailwind-scrollbar-hide')]
}
