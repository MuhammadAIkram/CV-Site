/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // <-- important!
    content: ["./*.html", "./js/**/*.js"], // make sure this matches your files
    theme: {
      extend: {},
    },
    plugins: [],
};