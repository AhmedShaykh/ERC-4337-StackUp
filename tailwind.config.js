/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './Components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#030712"
      }
    },
  },
  plugins: [],
};