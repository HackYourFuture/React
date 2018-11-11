import React from 'react';

const Header = React.createClass({
	propTypes: ({
		title: React.PropTypes.string.isRequired,
		checkedItemsFlag: React.PropTypes.bool.isRequired,
		handleDeleteItems:  React.PropTypes.func.isRequired,
		number: React.PropTypes.number,
	}),

	getDefaultProps() {
		return {
			title: 'React Todo List 🐶',
		}
	},

	handleClick(e) {
		e.preventDefault();
		this.props.handleDeleteItems();
	},

	render() {
		const showLinkClass = this.props.checkedItemsFlag ? 'is--visible' : '';
		const number = this.props.number;
		return (
			<header>
				<h1 className="clearfix">
					{this.props.title}
					<a
						className={`float--right text--xs spacer--top--xs text--reg is--hidden ${showLinkClass}`}
						href="#"
						onClick={this.handleClick}>
						Clear Completed Items ({number})
					</a>
				</h1>
			</header>
		);
	}
});

export default Header;