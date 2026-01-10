/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'primary': '#ef0f0f',
        'secondary': '#f97d0d'
      },
      fontFamily:{
        primary:['Poppins', 'sans-serif']
      }


    },
  },
  plugins: [],
}

