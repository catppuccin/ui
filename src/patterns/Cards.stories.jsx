import {
	Avatar,
	Card,
	CardMeta,
	Heading,
} from '../index';

export default {
	title: 'Patterns/Cards',
};

const PostCard = (args) => {

	return (
		<div className="w-1/2 mx-auto">
			<Card {...args}>
				<CardMeta className="mb-2">
					22 october 2022 - 6:00
				</CardMeta>

				<Heading size="xl">
					Main content
				</Heading>

				A nice card description

				<CardMeta className="mt-2">
					<Avatar size="small" name="Andreas Ekström" /> Andreas Ekström
				</CardMeta>
			</Card>
		</div>
	);

};

export const Post = PostCard.bind({});