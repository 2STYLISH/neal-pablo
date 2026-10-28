/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFBF1A",
          blue: "#179CC0",
          cyan: "#2BC4F3",
          slate: "#4E6B8A",
          bg: "#F2F2F2",
          red: "#F21D0A",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        btn: "0 3px 4px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
}
