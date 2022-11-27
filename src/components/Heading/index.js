import PropTypes from 'prop-types';
import cx from 'classnames';
import { typography } from '../../constants/colors';
import { sizing, sizingWeights } from '../../constants/typography';
import './_heading.css'

export const HeadingColorVariations = {
	...typography.base,
	...typography.highlights
};

export const Heading = ({ className, size, color, ...props }) => {

	return (
		<h2
			className={cx(
				sizing[size],
				HeadingColorVariations[color],
        'head',
        sizingWeights[size],
				className,
			)}
			{...props}
		/>
	);

};

Heading.propTypes = {
	/**
	 * Configure text size of Heading
	 */
	size: PropTypes.oneOf(Object.keys(sizing)),

	/**
	 * Configure text color
	 */
	color: PropTypes.oneOf(Object.keys(HeadingColorVariations)),
};

Heading.defaultProps = {
	size: 'h1',
	color: 'text',
};
