/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      gridTemplateColumns: {
        'auto': 'auto auto auto',
      },
    },
    screens: {
      'xxs': '360px',
      'xs': '475px',
      ...defaultTheme.screens,
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
