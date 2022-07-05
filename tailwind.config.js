/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,jsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@catppuccin/tailwindcss')({
			prefix: false,
			defaultFlavour: "macchiato",
		}),
	],
};
