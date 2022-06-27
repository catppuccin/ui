import React from 'react';

import { Anchor } from 'components/Anchor';

export default {
	title: 'Components/Anchor',
	component: Anchor,
};

const Template = (args) => <Anchor
	onClick={(e) => e.preventDefault()}
	{...args}
/>;

export const Preview = Template.bind({});
Preview.args = {
	children: 'Link content',
	underline: 'hover',
	href: '#yes'
};
