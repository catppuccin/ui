import React from 'react';

import { Input } from '../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Input',
	component: Input,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Preview = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Preview.args = {
	value: 'aekstr0m',
	placeholder: 'Insert username',
};
