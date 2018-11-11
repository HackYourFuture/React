import React from 'react';
import EditItemForm from './EditItemForm';

const Item = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		color: React.PropTypes.string,
		checked: React.PropTypes.bool.isRequired,
		edit: React.PropTypes.bool.isRequired,
		id: React.PropTypes.number.isRequired,
		onPassDelete: React.PropTypes.func.isRequired,
		onCheckedCheck: React.PropTypes.func.isRequired,
		editFlag: React.PropTypes.func.isRequired,
		editColorList: React.PropTypes.array.isRequired,
	},

	getInitialState() {
		return {
			clicked: false,
			checked: false,
			editSwitch: false,
		}
	},

	handleClick() {
		this.state.clicked = this.state.clicked ? false : true;
		this.setState(this.state);
	},

	handleChange({ target }) {
		this.state.checked = target.checked;
		this.props.onCheckedCheck(this.state.checked, this.props.id);
		this.setState(this.state);
	},

	onEditSwitch() {
		this.state.editSwitch = true;
		this.setState(this.state);
		this.props.editFlag(this.state.editSwitch, this.props.id);
	},

	render() {
		const colorClass = this.props.color ? this.props.color : '';
		const checkedClass = this.state.checked ? 'disabled' : '';

		return (
			<li className={`list__item ${colorClass} ${checkedClass}`} data-id={this.props.id}>
				<div className="list__checkbox">
					<input type="checkbox" onChange={this.handleChange} />
				</div>

				<div className="list__name">
					<p className="list__text" onClick={this.onEditSwitch}>{this.props.name}</p>
					<EditItemForm
						editMode={this.props.edit}
						val={this.props.name}
						color={this.props.color}
						colorList={this.props.editColorList}
						notifyEdits={this.props.onEdit}
						id={this.props.id}
					/>
				</div>
			</li>
		);
	}
});

export default Item;