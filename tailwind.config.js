/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "inset 0 2px 4px 0 rgba(255, 0, 0, 0.9)",
      },
      animation: {
        shine: "shine 1.3s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};
