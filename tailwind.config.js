const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      
      serif: ["'Oswald'", "sans-serif"],
      mono: ["'Source Code Pro'", "monospace"],
    },
    extend: {
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
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
};
