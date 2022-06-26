import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Button = ({ primary, variant, ...props }) => {

	/** REQUIRE TAILWIND STYLES
	 * bg-surface0
	 * bg-surface1
	 * bg-surface2
	 * border-surface0
	 * border-surface1
	 * border-surface2
	 * hover:bg-surface2
	 * hover:border-surface2
	 */

	const mode = primary ? 'bg' : 'border';

	return (
		<button
			type="button"
			className={cx(
				`${mode}-surface${variant}`,
				'py-2 px-4',
				'rounded-md',
				`hover:${mode}-surface2`,
				'transition-colors',
				'border-2',
				{
					'border-transparent': primary,
				}
			)}
			{...props}
		/>
	);
};

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	/**
	 * Controls color variant
	 */
	variant: PropTypes.oneOf(['0', '1', '2']),
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	primary: true,
	variant: '0',
	onClick: undefined,
};
