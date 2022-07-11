import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useId } from '../../libs/id';
import { typography } from '../../constants/colors';

import './_switch.css';

export const SwitchColorVariations = {
	...typography.base,
	...typography.highlights,
}

export const Switch = ({ color, value, label, ...props }) => {
	const id = useId();

	/**
	 * @param {Event} event 
	 */
	const onClickEvent = (event) => {
		event.preventDefault();

		if (props.onChange != null && typeof props.onChange === 'function') {
			props.onChange(!value);
		}
	};

	/**
	 * @param {KeyboardEvent} event 
	 */
	const onKeyEvent = (event) => {
		if (event.code !== 'Space' && event.code !== 'Enter') {
			return false;
		}

		event.preventDefault();

		if (props.onChange != null && typeof props.onChange === 'function') {
			props.onChange(!value);
		}
	}

	return (
		<div
			id={id}
			onClick={onClickEvent}
			className={cx(
				'inline-flex',
				'items-center',
			)}

			{...props}
		>
			<div
				tabIndex={0}
				onKeyDown={onKeyEvent}
				className={cx(
					SwitchColorVariations[color],
					'switch-pseudo',
					'relative',
					'inline-flex',
					'items-center',
					'h-7 w-12',
					'p-[2px]',
					'border-2',
					'cursor-pointer',
					'rounded-[20px]',
					'transition-colors',
					'outline-lavender',
					{
						'border-surface2': !value,
						'border-current': value,
						'active': value,
					}
				)}
			>
				<span
					className={cx(
						'relative',
						'z-10',
						'h-full w-5',
						'rounded-full',
						'transition-all',
						'duration-300',
						{
							'bg-surface2': !value,
							'bg-current': value,
							'translate-x-full': value,
						}
					)}
				/>
			</div>

			{label != null ?
				<label htmlFor={id} className="ml-2">
					{label}
				</label>
			: null}
		</div>
	);

};

Switch.defaultProps = {
	color: 'lavender',
	value: false,
	label: null,
	onChange: () => {},
};

Switch.propTypes = {
	color: PropTypes.oneOf(Object.keys(SwitchColorVariations)),
	value: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.func,
};
