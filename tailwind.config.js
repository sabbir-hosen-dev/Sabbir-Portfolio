/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgB: "rgba(var(--bgB))",
        textT: "rgba(var(--textT))",
        primaryP: "rgba(var(--primaryP))",
        inputI: "rgba(var(--inputI))",
        blogB: "rgba(var(--blogG))",
        cardC: "rgba(var(--cardC))"
      },
      fontFamily : {
        Inter : ["Inter", "serif"]
      }
    },
  },
  plugins: [],
  darkMode : "class"
}