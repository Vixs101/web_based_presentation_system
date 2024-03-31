/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        "1/4": "20%",
        "1/5": "25%",
      },
    },
  },
  plugins: [],
};
