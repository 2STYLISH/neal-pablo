/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFC21A",
          blue: "#1A9CC4",
          navy: "#14213D",
          pink: "#F7C6CF",
          red: "#E63946",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
