import React, { useState } from 'react';

import { Switch, SwitchColorVariations } from '.';

export default {
	title: 'Components/Switch',
	component: Switch,
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: Object.keys(SwitchColorVariations),
			}
		},
	}
};

const Template = (args) => {
	const [one, setOne] = useState(true);
	const [two, setTwo] = useState(false);

	return <div>
		<div>
			<Switch value={one} onChange={setOne} {...args} />
		</div>

		<div className="mt-3">
			<Switch value={two} onChange={setTwo} {...args} />
		</div>
	</div>;
};

export const Preview = Template.bind({});
Preview.args = {
	color: 'lavender',
	label: 'Switch label',
};
