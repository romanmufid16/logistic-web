/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', "sans-serif"],
      },
      colors: {
        accent: "#4DF600",
        accentHover: "#3DC300",
        green: "#60D72A",
        darkGreen: "#1F6200",
        primary: "#020800",
        secondary: "#98A393",
        text: "#808380"
      }
    },
  },
  plugins: [],
}