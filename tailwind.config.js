/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(232, 68, 56, 1)',
        secondary: 'rgba(230, 90, 87, 1)',
        ownGray: 'rgba(244, 245, 254, 1)',
        footer: 'rgba(34, 34, 34, 1)',
        grayOpasity: 'rgba(255, 255, 255, 0.1)', 
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1rem"
        }
      },
      fontFamily: {
        'gilroy400': ['gilroy-regular', 'sans-serif'],
        'gilroy600': ['gilroy-semibold', 'sans-serif'],
        'gilroy700': ['gilroy-bold', 'sans-serif'],
        'inter400': ['Inter-Regular', 'sans-serif'],
        'inter700': ['Inter-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

