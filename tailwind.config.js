/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#343a40",
        dark: "#212529",
      },
      fontFamily: {
        sans: ["Nunito sans", "san-serif"],
      },
    },
  },
  plugins: [],
};
