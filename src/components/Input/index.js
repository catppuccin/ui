import cx from 'classnames';

export const Input = ({ className, ...props }) => {

	return (
		<input
			className={cx(
				'w-full',
				'bg-surface0/40',
				'border-overlay0',
				'active:border-lavender',
				'focus:border-lavender',
				'py-2 px-4',
				'border-2',
				'rounded-md',
				'outline-none',
				'transition-colors',
				className,
			)}
			{...props}
		/>
	);

}

Input.defaultProps = {
};