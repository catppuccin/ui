import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const AvatarBorderVariants = {
	none: 'border-0',
	visible: 'border-2 border-lavender',
};

export const AvatarBackgroundVariants = {
	crust: 'bg-crust',
	mantle: 'bg-mantle',
};

export const AvatarSizeVariations = {
	small: 'h-9 w-9 text-md',
	medium: 'h-12 w-12 text-xl',
	large: 'h-16 w-16 text-2xl',
};

export const Avatar = ({ src, name, ...props }) => {

	let initial = null;
	let last = null;

	if (name != null) {
		const split = name?.split(' ');
		initial = split[0]?.slice(0, 1);

		if (split.length > 1)
			last = split[split.length - 1]?.slice(0, 1);
	}

	return (
		<span
			className={cx(
				AvatarBorderVariants[props.border],
				AvatarBackgroundVariants[props.background],
				AvatarSizeVariations[props.size],
				'rounded-full',
				'inline-flex',
				'items-center',
				'justify-center',
				'relative',
			)}
		>
			{src != null ?
				<span
					className={cx(
						'absolute',
						'inset-0',
						'rounded-full',
						'bg-cover',
						'bg-center',
						'bg-no-repeat',
					)}
					style={{ backgroundImage: `url('${src}')` }}
				/>
			: null}

			{src == null ?
				<span>
					{initial?.toUpperCase()}
					{last?.toUpperCase()}
				</span>
			: null}
		</span>
	);

};

Avatar.defaultProps = {
	border: 'visible',
	background: 'mantle',
	size: 'medium',
};

Avatar.propTypes = {
	background: PropTypes.oneOf(Object.keys(AvatarBackgroundVariants)),
	border: PropTypes.oneOf(Object.keys(AvatarBorderVariants)),
	size: PropTypes.oneOf(Object.keys(AvatarSizeVariations)),
};