/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");
export default {
     content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}" ],

  theme: {
    extend: {
      colors:{
        navcolor:"rgb(1,28,73)",
        subnava:"rgb(0,28,72)"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

