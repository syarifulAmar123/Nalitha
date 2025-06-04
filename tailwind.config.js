/** @type {import('tailwindcss').Config} */
const textshadow = require("tailwindcss-textshadow");

module.exports = {
  content: ["./**/*.{html,js}"],
  plugins: [textshadow],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "muncul-terus": "wiggle .5s linear 1 forwards",
        "muncul-terus-bawah": "wiggleBawah .5s linear 1 forwards",
        "fade-in": "fadein 0.5s ease-out",
        "fade-out": "fadeout 0.5s ease-in",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(150px)" },
          "100%": { transform: "translateY(0)" },
        },
        wiggleBawah: {
          "0%": { transform: "translateX(-150px)" },
          "100%": { transform: "translateX(0)" },
        },
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeout: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
