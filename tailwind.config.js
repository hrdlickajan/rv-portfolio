/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Lora', 'serif'],
        body: ['Manrope', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
