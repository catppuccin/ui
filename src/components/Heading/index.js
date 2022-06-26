import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Heading = ({ size, variant, ...props }) => {

	/** REQUIRE TAILWIND STYLES
	 * text-lg
	 * text-xl
	 * text-2xl
	 * text-3xl
	 * text-4xl
	 * text-5xl
	 * text-6xl
	 * text-7xl
	 * text-8xl
	 * text-9xl
	 * text-subtext0
	 * text-subtext1
	 */

	return (
		<h2
			className={cx(
				`text-${size}`,
				`text-subtext${variant}`,
			)}
			{...props}
		/>
	);

};

Heading.propTypes = {
	/**
	 * Configure text size of Heading
	 */
	size: PropTypes.oneOf([
		'xl',
		'2xl',
		'3xl',
		'4xl',
		'5xl',
		'6xl',
		'7xl',
		'8xl',
		'9xl',
	]),

	/**
	 * Configure text color
	 */
	variant: PropTypes.oneOf(['0', '1'])
};

Heading.defaultProps = {
	size: 'xl',
	variant: '0',
};