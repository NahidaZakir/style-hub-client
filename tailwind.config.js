/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#bc6c25",

          "secondary": "#dda15e",
          "accent": "#b08968",
          "neutral": "#6c757d",
          "base-100": "#ffffff"

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
