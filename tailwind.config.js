/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#F7931E',       // Logo, buttons, headings
          text: '#000000',          // Headlines, body, icons
          background: '#FFFFFF',    // Main page background
          light: '#F2F2F2',         // Light section backgrounds
        }
      },
      fontFamily: {
        barlow: ["Barlow Condensed", 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


