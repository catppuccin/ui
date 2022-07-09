import React from 'react';

import { Heading, HeadingColorVariations } from '../components/Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: Object.keys(HeadingColorVariations),
			}
		},
	}
};

const Template = (args) => <Heading {...args} />;

export const Preview = Template.bind({});
Preview.args = {
	size: '4xl',
	color: 'text',
	children: 'Heading 1',
};
