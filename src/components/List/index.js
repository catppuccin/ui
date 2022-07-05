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

export const ListMarkerVariations = {
	text: 'marker:text-text',
	subtext: 'marker:text-subtext0',
	overlay: 'marker:text-overlay1',
	rosewater: 'marker:text-rosewater',
	green: 'marker:text-green',
	peach: 'marker:text-peach',
	maroon: 'marker:text-maroon',
	blue: 'marker:text-blue',
	red: 'marker:text-red',
	green: 'marker:text-green',
	yellow: 'marker:text-yellow',
	pink: 'marker:text-pink',
	teal: 'marker:text-teal',
};

export const List = ({ children, ...props }) => {

	const listProps = {
		className: cx(
			'list-inside',
			ListColorVariations[props.color],
			ListStyleVariations[props.listStyle],
			ListMarkerVariations[props.markerColor],
		),
	};

	return createElement(ListTypeVariations[props.type], listProps, children);

};

List.defaultProps = {
	type: 'unordered',
	listStyle: 'disc',
	color: 'foreground',
	markerColor: 'text',
};

List.propTypes = {
	color: PropTypes.oneOf(Object.keys(ListColorVariations)),
	type: PropTypes.oneOf(Object.keys(ListTypeVariations)),
	listStyle: PropTypes.oneOf(Object.keys(ListStyleVariations)),
	markerColor: PropTypes.oneOf(Object.keys(ListMarkerVariations)),
};
