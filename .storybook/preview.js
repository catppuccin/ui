import '../src/main.css';
import './storybook.css';

const palettes = {
	'Latte': 'latte',
	'Frappe': 'frappe',
	'Macchiato': 'macchiato',
	'Mocha': 'mocha',
};

export const globalTypes = {
	theme: {
		name: 'Flavour',
		description: 'Controls catppuccin flavour',
		defaultValue: 'Macchiato',
		toolbar: {
			icon: 'paintbrush',
			// Array of plain string values or MenuItem shape (see below)
			items: Object.keys(palettes),
			// Property that specifies if the name of the item will be displayed
			showName: true,
			// Change title based on selected value
			dynamicTitle: true,
		},
	},
};

const getTheme = (themeName) => {
	return palettes[themeName];
};

const withThemeProvider = (Story, context)=>{
	const theme = getTheme(context.globals.theme);

	// Clear all class names on preview body
	Object.values(palettes).forEach((theme) => {
		document.body.classList.remove(theme);
	});

	// Sets current theme
	document.body.classList.add(theme);

	return (
		<Story {...context} />
	);
};

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [withThemeProvider];