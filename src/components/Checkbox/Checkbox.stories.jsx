import React from 'react';

import { Checkbox, CheckboxColorVariations } from './index';

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: Object.keys(CheckboxColorVariations),
			}
		},
	}
};

const Template = (args) => <Checkbox {...args} />;
const Multiple = (args) => <>
	<div>
		<Checkbox {...args} />
	</div>

	<div className="mt-3">
		<Checkbox {...args} checked />
	</div>
</>;

export const With_Label = Template.bind({});

With_Label.args = {
	color: 'text',
	label: 'Label for checkbox'
};

export const Without_Label = Template.bind({});

Without_Label.args = {
	color: 'text',
	label: null,
};

export const Disabled = Multiple.bind({});

Disabled.args = {
	color: 'text',
	label: 'Label for disabled checkbox',
	disabled: true,
};
