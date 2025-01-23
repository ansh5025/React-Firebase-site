/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure all relevant files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
