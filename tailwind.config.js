// import colors from './scripts/colors';
const colors = require('./scripts/colors.mjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
	colors: () => colors.getColors(),
  },
  plugins: [],
}
