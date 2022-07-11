import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useId } from '../../libs/id';
import { typography } from '../../constants/colors';

import './_radio.css';

export const RadioColorVariations = {
	...typography.base,
	...typography.highlights,
};

export const Radio = ({ color, label, ...props }) => {
	const id = useId('cb');

	return <div className="inline-flex items-center">
		<input
			type="radio"
			id={id}
			className={cx(
				RadioColorVariations[color],
				'radio-after',
				'appearance-none',
				'transition-colors',
				'h-7 w-7',
				'rounded-full',
				'bg-surface0/40',
				'border-2',
				'border-surface2',
				'checked:border-current',
				'checked:bg-surface1/70',
				'inline-flex',
				'items-center',
				'justify-center',
				'cursor-pointer',
				'disabled:cursor-not-allowed',
				'disabled:opacity-60',
			)}

			{...props}
		/>

		{label != null ?
			<label
				htmlFor={id}
				children={label}
				className={cx(
					'ml-2',
				)}
			/>
		: null}
	</div>

};

Radio.defaultProps = {
	color: 'lavender',
	label: null,
	disabled: false,
};

Radio.propTypes = {
	label: PropTypes.string,
	disabled: PropTypes.bool,
	color: PropTypes.oneOf(Object.keys(RadioColorVariations)),
};
