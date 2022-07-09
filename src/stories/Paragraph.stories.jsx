import React from 'react';

import { Paragraph, ParagraphColorVariations } from '../components/Paragraph';

export default {
	title: 'Components/Paragraph',
	component: Paragraph,
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: Object.keys(ParagraphColorVariations),
			}
		},
	}
};

const Template = (args) => <Paragraph {...args} />;

export const Foreground = Template.bind({});
Foreground.args = {
	children: 'Text in paragraph',
	color: 'text',
	size: 'base',
};

export const Subtext = Template.bind({});
Subtext.args = {
	children: 'Text in paragraph',
	color: 'subtext',
	size: 'base',
};

export const Overlay = Template.bind({});
Overlay.args = {
	children: 'Text in paragraph',
	color: 'overlay',
	size: 'base',
};
