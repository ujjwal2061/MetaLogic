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
       "bottomvolor": {
          "50": "#e9eaef",
          "100": "#d2d5de",
          "200": "#a5aabe",
          "300": "#78809d",
          "400": "#4b557d",
          "500": "#1e2b5c",
          "600": "#18224a",
          "700": "#121a37",
          "800": "#0c1125",
          "900": "#060912"
        },
         "middlecolor": {
          "50": "#f5f1fb",
          "100": "#ece4f6",
          "200": "#d9c9ed",
          "300": "#c5ade4",
          "400": "#b292db",
          "500": "#9f77d2",
          "600": "#7f5fa8",
          "700": "#5f477e",
          "800": "#403054",
          "900": "#20182a"
        },
        "topcolor": {
          "50": "#fefbf7",
          "100": "#fef6f0",
          "200": "#fceee1",
          "300": "#fbe5d1",
          "400": "#f9ddc2",
          "500": "#f8d4b3",
          "600": "#c6aa8f",
          "700": "#957f6b",
          "800": "#635548",
          "900": "#322a24"
        },
        "primarycolor":{
          "50": "#ebe8f3",
          "100": "#d6d1e6",
          "200": "#ada3cd",
          "300": "#8575b4",
          "400": "#5c479b",
          "500": "#331982",
          "600": "#291468",
          "700": "#1f0f4e",
          "800": "#140a34",
          "900": "#0a051a"
        },
        "smalldiv":"rgb(18,19,18)",
        "secondarycolor":"rgb(218, 165, 32)",
        "button":"rgb(234,235,235)"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

