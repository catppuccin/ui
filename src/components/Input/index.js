import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Input = (props) => {

	return (
		<input
			className={cx(
				'bg-surface0/40',
				'border-overlay0',
				'active:border-lavender',
				'focus:border-lavender',
				'py-2 px-4',
				'border-2',
				'rounded-md',
				'outline-none',
				'transition-colors',
			)}
			{...props}
		/>
	);

}

Input.propTypes = {
};

Input.defaultProps = {
};