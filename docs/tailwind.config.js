/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- important!
  content: ["./*.html", "./js/**/*.js"], // make sure this matches your files
  theme: {
    extend: {},
  },
  safelist: [
    'animate-fadeIn',               // the actual animation class
    'group-open:animate-fadeIn',    // Tailwind variant used in <details>
    'group-open:rotate-180',        // your summary arrow rotation
  ],
  plugins: [],
};