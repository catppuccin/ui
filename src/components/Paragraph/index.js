import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const ParagraphSizeVariations = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-[1rem]',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl',
	'9xl': 'text-9xl',
};

export const ParagraphColorVariations = {
	foreground: 'text-text',
	subtext: 'text-subtext0',
	subtle: 'text-overlay1'
};

export const Paragraph = ({ children, ...props }) => {

	return (
		<p
			className={cx(
				ParagraphColorVariations[props.color],
				ParagraphSizeVariations[props.size],
			)}
		>
			{children}
		</p>
	);

};

Paragraph.defaultProps = {
	size: 'base',
	color: 'foreground',
};

Paragraph.propTypes = {
	color: PropTypes.oneOf(Object.keys(ParagraphColorVariations)),
	size: PropTypes.oneOf(Object.keys(ParagraphSizeVariations)),
};
