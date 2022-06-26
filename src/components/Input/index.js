import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Input = (props) => {

	return (
		<input
			className={cx(
				'py-2 px-4',
				'bg-surface0',
				'border',
				'border-overlay0',
				'active:border-lavender',
				'focus:border-lavender',
				'rounded-md',
				'outline-none',
			)}
			{...props}
		/>
	);

}

Input.propTypes = {
};

Input.defaultProps = {
};