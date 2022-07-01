import React from 'react';

import { Paragraph } from '../components/Paragraph';

export default {
	title: 'Components/Paragraph',
	component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Foreground = Template.bind({});
Foreground.args = {
	children: 'Text in paragraph',
	color: 'foreground',
	size: 'base',
};

export const Subtext = Template.bind({});
Subtext.args = {
	children: 'Text in paragraph',
	color: 'subtext',
	size: 'base',
};

export const Subtle = Template.bind({});
Subtle.args = {
	children: 'Text in paragraph',
	color: 'subtle',
	size: 'base',
};
