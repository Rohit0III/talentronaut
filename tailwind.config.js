/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-30px)',
          },
        },
      },
      animation: {
        "animate-bounce": "bounce 2s linear infinite ease-in-out", // fixed animation name and syntax
      },
      colors: {
        orange: {
          1000: "#ff3d01",
        },
      },
    },
  },
  plugins: [],
};