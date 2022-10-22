import {
	Anchor,
	Button,
	Checkbox,
	Input,
	Heading,
} from '../index';

export default {
	title: 'Patterns/Forms',
};

const SignupForm = () => {

	return (
		<div className="w-1/2 mx-auto">
			<Heading size="3xl" className="mb-4">
				Welcome new user!
			</Heading>

			<div className="mb-4">
				<div className="flex mb-2">
					<Input placeholder="First name" />
					<Input placeholder="Last name" className="ml-2" />
				</div>

				<Input placeholder="Username" />

				<div className="mt-2">
					<Input type="password" placeholder="Password" />
				</div>
			</div>

			<div className="mt-4">
				<Checkbox label="I agree to the terms and conditions." />
			</div>

			<div className="flex items-center mt-4">
				<Button>
					Sign up
				</Button>

				<div className="ml-2">
					Already have an account? <Anchor href="#">Sign in</Anchor>
				</div>
			</div>
		</div>
	);

};

const SigninForm = () => {

	return (
		<div className="w-1/2 mx-auto">
			<Heading size="3xl" className="mb-4">
				Welcome back!
			</Heading>

			<div className="mb-4">
				<Input placeholder="Username" />

				<div className="mt-2">
					<Input type="password" placeholder="Password" />
				</div>
			</div>

			<div className="flex items-center mt-4">
				<Button>
					Sign in
				</Button>

				<div className="ml-2">
					Don't have an account? <Anchor href="#">Sign up</Anchor>
				</div>
			</div>
		</div>
	);

};

export const Sign_up = SignupForm.bind({});
export const Sign_in = SigninForm.bind({});