/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryOrange: "#ff7d1a",
        primaryPaleOrange: "#ffede0",
        neutralDarkBlue: "#1d2025",
        darkishGreyBlue: "#68707d",
        grayishBlue: "#b6bcc8",
        lightGrayishBlue: "#f7f8fd",
        white: "#ffffff",
        blackLightBox: "#bfbfbf",
        blackPure: "#000000"
      },
      fontFamily: {
        KumbBold: "KumbhBold",
        KumbRegular: "KumbhRegular"
      }
    },
  },
  plugins: [],
}

