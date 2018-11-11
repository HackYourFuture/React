import React from 'react';

function Actions({clickedFlag, onDelete}) {
	const makeThisVisible = clickedFlag ? 'is--show' : '';

	return (
        <ul className={`dropdown ${makeThisVisible}`}>
			<li className="dropdown__item">
				<a className="dropdown__link important" href="#" onClick={onDelete}>Delete</a>
			</li>
		</ul>
    );
}

Actions.propTypes = {
	clickedFlag: React.PropTypes.bool.isRequired,
	onDelete: React.PropTypes.func.isRequired,
};

export default Actions;