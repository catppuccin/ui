import React from 'react';

import { Button } from 'components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Button',
	component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Preview = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Preview.args = {
	primary: true,
	children: 'Button',
};
