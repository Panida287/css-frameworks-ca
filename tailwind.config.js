/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*/index.html",
    "./*/**/index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    screens: {
      ph: '480px',
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#E85D04',
        darkGrey: '#2E2E2E',
        lightGrey: '#F1F1F1'
      },
      fontFamily: {
        h: ['Poppins', 'sans-serif'],
        p: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [],
};
