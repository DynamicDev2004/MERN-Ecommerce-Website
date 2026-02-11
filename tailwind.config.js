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
        'secondary': '#f97d0d',
        'lightGray': '#58595b',
        'darkGray': '#231f20'
      },
      fontFamily:{
        primary:['Poppins', 'sans-serif']
      }


    },
    screens: {
      xs: { min: '520px', max: '639px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

