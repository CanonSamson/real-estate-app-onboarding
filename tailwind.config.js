/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/**/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#000000",
        tertiary: "#000000",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".elevation-5": {
          elevation: 5,
        },
      });
    },
  ],
};
