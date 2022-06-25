const { variants } = require('./palette');

const getColors = () => {
	console.log('palette', variants);
};

getColors();

module.exports = {
	getColors,
};