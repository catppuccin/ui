import React from 'react';

import { Heading } from '../components/Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Preview = Template.bind({});
Preview.args = {
	size: '4xl',
	variant: '0',
	children: 'Heading 1',
};
