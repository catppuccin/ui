import React from 'react';

import { Radio, RadioColorVariations } from './index';

export default {
	title: 'Components/Radio',
	component: Radio,
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: Object.keys(RadioColorVariations),
			}
		},
	}
};

const Template = (args) => <>
	<div>
		<Radio {...args} name="radio-button" value="optionA" />
	</div>

	<div className="mt-3">
		<Radio {...args} name="radio-button" value="optionB" checked />
	</div>
</>;

export const With_Label = Template.bind({});

With_Label.args = {
	color: 'lavender',
	label: 'Label for radio'
};

export const Without_Label = Template.bind({});

Without_Label.args = {
	color: 'lavender',
	label: null,
};

export const Disabled = Template.bind({});

Disabled.args = {
	color: 'lavender',
	label: 'Label for disabled radio',
	disabled: true,
};
