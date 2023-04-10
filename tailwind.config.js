/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        500: "500px",
        700: "700px",
      },
      height: {
        350: "350px",
        500: "500px",
        600: "600px",
        700: "700px",
      },
      colors: {
        commonGreen: "#63D1CE",
        signupGradientT: "#FFE2F1",
        signupGradientB: "#FFE4D8",
        bgGradientGray: "#d9d9d9",
        bgGradientRed: "rgba(234,4,126,0.2)",
        bgGradientYellow: "rgba(252,231,0,0.2)",
        bgGradientOrange: "rgba(255,109,40,0.2)",
        categoryBgRed: "#FFE2F1",
        categoryBgOrange: "#FFE4D8",
        categoryBgYellow: "#FDFBDD",
        categoryBgGrren: "#C3FFF3",
        offerOrange: "#F2804A",
      },
    },
    screens: {
      xs: "576",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
