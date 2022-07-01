import React from 'react';

import { Avatar } from '../components/Avatar';

export default {
	title: 'Components/Avatar',
	component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Name = Template.bind({});
Name.args = {
	border: 'visible',
	background: 'mantle',
	name: 'Andreas Ekström',
};

export const Image = Template.bind({});
Image.args = {
	border: 'visible',
	src: 'https://aekstrom.me/assets/face.jpg',
};
