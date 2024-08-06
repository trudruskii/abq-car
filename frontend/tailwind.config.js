/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {},
  },
  plugins: [  require('flowbite/plugin')],
}