import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Header extends Component {
	handleClick = (event) => {
		event.preventDefault();
		this.props.handleDeleteItems();
	}

	render() {
		const showLinkClass = this.props.checkedItemsFlag ? 'is--visible' : '';
		const number = this.props.number;
		return (
			<header>
				<h1 className="clearfix">
					{this.props.title}
					<button
						className={`float--right text--xs spacer--top--xs text--reg is--hidden ${showLinkClass}`}
						onClick={this.handleClick}>
						Clear Completed Items ({number})
					</button>
				</h1>
			</header>
		);
	}
}

Header.defaultProps = {
	title: 'React Todo List 🐶'
}
Header.propTypes = {
	title: PropTypes.string.isRequired,
	checkedItemsFlag: PropTypes.bool.isRequired,
	handleDeleteItems: PropTypes.func.isRequired,
	number: PropTypes.number,
}
