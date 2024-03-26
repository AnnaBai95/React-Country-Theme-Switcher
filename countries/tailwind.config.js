/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      white: 'hsl(0, 0%, 100%)',
      lightGrey: 'hsl(0, 0%, 98%)',
      darkGrey: 'hsl(0, 0%, 52%)'
    },
    extend: {
      rotate:{
        '30': '30deg'
      }
    },
  },
  plugins: [],
};
