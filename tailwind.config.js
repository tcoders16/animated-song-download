/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bold': ['Gilroy-Bold', 'sans-serif'],
        'medium': ['Gilroy-Medium', 'sans-serif'],
        'light': ['Gilroy-Light', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}

