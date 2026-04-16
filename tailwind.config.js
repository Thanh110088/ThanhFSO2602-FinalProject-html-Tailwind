/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        open: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#0088ff",
          dark: "#0066cc",
          light: "#e6f3ff",
        },
      },
    },
  },
  plugins: [],
};
