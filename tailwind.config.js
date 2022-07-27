/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["n27", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        green: {
          900: "#051d17",
        },
      },
    },
  },
  plugins: [],
};
