import { createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Anchor = ({ as, underline, ...props }) => {

	let element = 'a';
	const anchorProps = {
		...props,
		className: cx(
			'text-rosewater',
			{
				'decoration-lavender': underline != 'never',
				'decoration-2': underline != 'never',
				'hover:underline': underline == 'hover',
				'underline': underline == 'always',
			}
		),
	};

	if (as != null) {
		element = as;
	}

	return createElement(element, anchorProps, props.children);

};

Anchor.propTypes = {
	/**
	 * Configure element to be used for rendering anchor tag
	 */
	as: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.oneOf(['a']),
	]),
	/**
	 * Configure when underline should be shown
	 */
	underline: PropTypes.oneOf([
		'never',
		'hover',
		'always',
	]),
};

Anchor.defaultProps = {
	underline: 'hover',
	as: 'a',
};