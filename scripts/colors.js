const { variants } = require('./palette');

const getColors = () => {
	const palette = 'macchiato';
	let colors = {};

	Object.keys(variants[palette]).forEach((color) => {
		colors[color] = variants[palette][color].hex;
	});

	colors['transparent'] = 'transparent';

	return colors;
};

const getVariants = () => {
	return Object.keys(variants);
};

module.exports = {
	getColors,
	getVariants,
};