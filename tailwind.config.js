/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "Backgrounds": "url('https://assets-global.website-files.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png')"
      },
      backgroundColor:{
        "BlackMat":"#232324",
        "buttons":"#ffffff1a"
      }
    },
  },
  plugins: [],
}

