import React from 'react';

import {
	Card,
	CardBackgroundVariations,
	CardBorderVariations,
} from '.';

export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		background: {
			control: {
				type: 'select',
				options: Object.keys(CardBackgroundVariations),
			}
		},
		border: {
			control: {
				type: 'select',
				options: Object.keys(CardBorderVariations),
			}
		},
	}
};

const Template = (args) => <>
	<div>
		<Card {...args}>
			Card contents
		</Card>
	</div>
</>;

export const Preview = Template.bind({});

Preview.args = {
	border: 'surface',
	background: 'crust',
};
