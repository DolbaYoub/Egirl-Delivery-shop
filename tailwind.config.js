/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bungee': ['Bungee Spice', 'cursive'] // Assurez-vous d'utiliser le bon nom de famille de la police
      }
    },
  },
  plugins: [],
}

