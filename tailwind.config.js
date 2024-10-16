/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B5B9A", // A custom purple color
        secondary: "#FFD700", // A bright gold color
        accent: "#FF6F61", // A coral color for accents
      },
    },
  },
  plugins: [],
};
