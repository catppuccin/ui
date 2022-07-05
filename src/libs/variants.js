
/**
 * @param {string} type Appendend before -value. e.g. text or bg
 * @param {Array} constants List of items
 * @returns {object}
 */
export const buildVariantFromConstant = (type, constants) => {
	return constants.reduce((current, element) => {
		current[element] = `${type}-${element}`;
		return current;
	}, {})
};
