// import colors from './scripts/colors';
// import palettes from '@catppuccin/palette';

const colors = require('./scripts/colors.js');

console.log('colors tailwind', colors);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
	colors: () => colors.getColors(),
  },
  plugins: [],
}
