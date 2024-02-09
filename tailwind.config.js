/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#E6D7E1",
        "dark-pink": "#E1C9D9",
      },
      fontFamily: {
        sans: ["Raleway", "san-serif"],
      },
    },
  },
  plugins: [],
};
