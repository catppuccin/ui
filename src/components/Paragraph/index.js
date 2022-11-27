import PropTypes from 'prop-types';
import cx from 'classnames';
import { typography } from '../../constants/colors';
import { sizing, sizingWeights } from 'constants/typography';

export const ParagraphColorVariations = {
	...typography.base,
};

export const Paragraph = ({ children, ...props }) => {

	return (
		<p
			className={cx(
				ParagraphColorVariations[props.color],
				sizing[props.size],
        sizingWeights[props.size]
			)}
		>
			{children}
		</p>
	);

};

Paragraph.defaultProps = {
	size: 'default',
	color: 'foreground',
};

Paragraph.propTypes = {
	color: PropTypes.oneOf(Object.keys(ParagraphColorVariations)),
	size: PropTypes.oneOf(Object.keys(sizing)),
};
