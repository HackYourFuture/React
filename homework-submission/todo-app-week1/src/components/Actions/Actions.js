import React from 'react';
import PropTypes from 'prop-types'

export function Actions({ clickedFlag, onDelete }) {
	const makeThisVisible = clickedFlag ? 'is--show' : '';

	return (
		<ul className={`dropdown ${makeThisVisible}`}>
			<li className="dropdown__item">
				<button className="dropdown__link important" onClick={onDelete}>Delete</button>
			</li>
		</ul>
	);
}

Actions.propTypes = {
	clickedFlag: PropTypes.bool.isRequired,
	onDelete: PropTypes.func.isRequired,
};
