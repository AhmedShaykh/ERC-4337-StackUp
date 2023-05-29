/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './Components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ]
};