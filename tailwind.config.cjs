/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        //white: "#8f9197",
        five: "#30475E",
        four: "#1B9C85",
        third: "#F05454",
        secondary: "#DDDDDD",
        primary: "#222831",
      },
      fontFamily: {
        sans: ["Neue Haas Grotesk Text Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
