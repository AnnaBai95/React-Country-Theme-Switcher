/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
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
        lightGrey: "hsl(0, 0%, 98%)",
        darkGrey: "hsl(0, 0%, 52%)",
        darkBlue: "hsl(209, 23%, 22%)",
        vDarkBlue1: "hsl(207, 26%, 17%)",
        vDarkBlue2: "hsl(200, 15%, 8%)",
        darkGrey: "hsl(0, 0%, 52%)",
        white: "hsl(0, 0%, 100%)",
        shadowGrey: "hsl(0deg 0% 88.98%)",
      },
      boxShadow:{
        custom: '0 1px 3px 1px hsl(0deg 0% 88.98%)',
        customDark:'0 1px 3px 1px hsl(207, 26%, 17%)',
      }
    },
  },
  plugins: [],
};
