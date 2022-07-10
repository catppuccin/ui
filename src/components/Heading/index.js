import PropTypes from 'prop-types';
import cx from 'classnames';
import { typography } from '../../constants/colors';

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
	...typography.base,
	...typography.highlights
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