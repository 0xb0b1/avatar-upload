/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'box-background-color': '#F2F5F8',
        'dotted-border-color': '#C7CDD3',
        'button-color': '#3D485F',
        'title-color': '#495567',
      },
    },
  },
  plugins: [],
}
