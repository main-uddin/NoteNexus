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
    screens: {
      sm: "100px",
      md: "500px",
      lg: "1000px",
    },
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          ...fontFamily.sans,
        ],
      },
      colors: {
        light: {
          background: "#f1f5f9",
          foreground: "#f8fafc",
          primary: "#5348C7",
          text: "242331",
        },
      },
    },
  },
  plugins: [],
};
