/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,jsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'inter': ["Inter", "ui-sans-serif"],
			},
		},
	},
	plugins: [
		require('@catppuccin/tailwindcss')({
			prefix: false,
			defaultFlavour: "macchiato",
		}),
	],
};
