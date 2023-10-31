/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "tertiary-color": "var(--TertiaryColor-color)",
        "quaternary-color": "var(--QuaternaryColor-color)"
      },
      width:{
        "91%":"91%",
      },
      margin:{
        "40%":"40%",
      },
    },
  },
  plugins: [],
}