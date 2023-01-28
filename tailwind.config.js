/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["about.html"],
  theme: {
    extend: {
      fontFamily: {
        dm: "DM Sans, sans-serif",
        noto: "Noto Sans, sans-serif",
      },

      colors: {
        basic: "#0B0B22",
        greend: "#16FCD2",
      },

      borderRadius: {
        normal: "5px",
      },

      background: {
        hero: "url('../assets/svg/grid.svg') center no-repeat, url('../assets/img/gradient-green.png') left top no-repeat, url('../assets/img/gradient-red.png') bottom right no-repeat",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
