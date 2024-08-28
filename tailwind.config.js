/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-1': '#1E213A',
        'background-2': '#100E1D',
      },
    },
  },
  plugins: [],
}
