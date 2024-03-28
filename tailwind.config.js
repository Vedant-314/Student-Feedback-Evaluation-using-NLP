/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'snow': '#fcf7f8',
        'french-gray': '#ced3dc',
        'rose-quartz': '#aba9c3',
        'denim': '#275dad',
        'paynes-gray': '#5b616a',
      },
    },
  },
  plugins: [],
}

