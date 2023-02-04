const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",

  ],
  
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'serif': ['var(--font-recoleta)'],
       
      },
      
      colors: {
        "page-black": "#121212",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require('flowbite/plugin'),
  ],
};
