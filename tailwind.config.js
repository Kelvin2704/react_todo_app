/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeToLeft:{
          "0%": { opacity: 0, transform: "translateX(100%)" },

          "100%": { opacity: 1, transform: "translateX(0%)" },
        }
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
        fadeToLeft:"fadeToLeft 0.5s ease-out"
      },
    },
  },
  plugins: [],
};
