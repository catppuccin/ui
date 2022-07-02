import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const ListTypeVariations = {
	unordered: 'ul',
	ordered: 'ol',
};

export const ListStyleVariations = {
	none: 'list-none',
	disc: 'list-disc',
	decimal: 'list-decimal',
};

export const ListColorVariations = {
	foreground: 'text-text',
	subtext: 'text-subtext0',
	subtle: 'text-overlay1'
};

export const List = ({ children, ...props }) => {

	const anchorProps = {
		className: cx(
			'list-inside',
			ListColorVariations[props.color],
			ListStyleVariations[props.listStyle],
		),
	};

	return createElement(ListTypeVariations[props.type], anchorProps, children);

};

List.defaultProps = {
	type: 'unordered',
	listStyle: 'disc',
	color: 'foreground',
};

List.propTypes = {
	color: PropTypes.oneOf(Object.keys(ListColorVariations)),
	type: PropTypes.oneOf(Object.keys(ListTypeVariations)),
	listStyle: PropTypes.oneOf(Object.keys(ListStyleVariations)),
};
