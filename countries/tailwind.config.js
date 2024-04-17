/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        30: "30deg",
      },
      spacing: {
        450: "28.125rem",
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(0, 0%, 98%)",
        darkGrey: "hsl(0, 0%, 52%)",
      }
    }
  },
  plugins: [],
};
