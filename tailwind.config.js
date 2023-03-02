/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      transparent: '#00000000',
      white: '#ffffff',
      black: '#000000',
      primary: {
        bgPrimary: '#F1F4FA',
        pink: '#FF69B4',
        lightGreen: '#03A89E',
        secondary: '#03A89E',
        primary: '#3A36DB',
        danger: '#D11A2A',
        disabled: '#99B2C6',

      },
      text: {
        primary: "#06152B"
      },
      disabled: '#99B2C6',
      dark: {
        bgPrimary: '#1A202C',
        bgSecondary: '#364153',
        pink: '#FF69B4',
        green: '#2FE5A7',
        blue: '#605CFF',
        red: '#D11A2A',

      }
    },
  },
  darkMode: 'class',
  plugins: [],
}