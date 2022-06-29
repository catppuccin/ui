const colors = require('./scripts/colors.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./public/index.html',
		'./src/**/*.{html,js}',
	],
	theme: {
		extend: {},
		colors: () => colors.getColors(),
		borderRadius: {
			none: '0px',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			'2xl': '1rem',
			'3xl': '1.5rem',
			full: '9999px',
		},
	},

	plugins: [],
};
