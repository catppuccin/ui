import React from 'react';

import { List } from '.';

export default {
	title: 'Components/List',
	component: List,
};

const Template = (args) => (
	<List {...args}>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
		<li>Item 4</li>
	</List>
);

export const Unordered = Template.bind({});
Unordered.args = {
	type: 'unordered',
	listStyle: 'disc',
	color: 'foreground',
	markerColor: 'text',
};

export const Ordered = Template.bind({});
Ordered.args = {
	type: 'ordered',
	listStyle: 'disc',
	color: 'foreground',
	markerColor: 'text',
};
