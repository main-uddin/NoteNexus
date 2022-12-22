const {
  fontFamily,
} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          ...fontFamily.sans,
        ],
      },
      colors: {
        light: {
          background: "white",
          foreground: "#FFFFFF",
          primary: "#5348C7",
          text: "242331",
        },
      },
    },
  },
  plugins: [],
};
