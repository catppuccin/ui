import PropTypes from 'prop-types';
import cx from 'classnames';
import { backgrounds, borders } from '../../constants/colors';

export const CardBorderVariations = {
	...borders,
};

export const CardBackgroundVariations = {
	...backgrounds,
};

export const Card = ({ background, border, children }) => {

	return (
		<div
			className={cx(
				CardBorderVariations[border],
				CardBackgroundVariations[background],
				'rounded-md',
				'border-2',
				'py-4 px-6',
			)}
		>
			{children}
		</div>
	);

};

export const CardMeta = ({ children, className, ...rest }) => {

	return (
		<div className={`text-sm ${className}`} {...rest}>
			{children}
		</div>
	);

};

Card.defaultProps = {
	background: 'crust',
	border: 'surface',
};

Card.propTypes = {
	background: PropTypes.oneOf(Object.keys(CardBackgroundVariations)),
	border: PropTypes.oneOf(Object.keys(CardBorderVariations)),
};
