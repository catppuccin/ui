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
    fontSize: {
      '5xl': "4em",
      '4xl': "3em",
      '3xl': "2em",
      '2xl': "1.5em",
      xl: "1em",
      base: "1em",
      sm: "0.5em"
    }
	},
	plugins: [
		require('@catppuccin/tailwindcss')({
			prefix: false,
			defaultFlavour: "macchiato",
		}),
	],
};
