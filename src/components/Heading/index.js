import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const HeadingSizeVariations = {
	'lg': 'text-lg',
	'xl': 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl',
	'9xl': 'text-9xl',
};

export const HeadingColorVariations = {
	text: 'text-text',
	subtext: 'text-subtext0',
	overlay: 'text-overlay1',
	rosewater: 'text-rosewater',
	green: 'text-green',
	peach: 'text-peach',
	maroon: 'text-maroon',
	blue: 'text-blue',
	red: 'text-red',
	green: 'text-green',
	yellow: 'text-yellow',
	pink: 'text-pink',
	teal: 'text-teal',
};

export const Heading = ({ size, color, ...props }) => {

	return (
		<h2
			className={cx(
				HeadingSizeVariations[size],
				HeadingColorVariations[color],
			)}
			{...props}
		/>
	);

};

Heading.propTypes = {
	/**
	 * Configure text size of Heading
	 */
	size: PropTypes.oneOf(Object.keys(HeadingSizeVariations)),

	/**
	 * Configure text color
	 */
	color: PropTypes.oneOf(Object.keys(HeadingColorVariations)),
};

Heading.defaultProps = {
	size: 'xl',
	color: 'text',
};