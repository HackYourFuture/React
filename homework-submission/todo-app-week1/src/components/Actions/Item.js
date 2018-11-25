import React, { Component } from 'react';
import { EditItemForm } from './EditItemForm';
import PropTypes from 'prop-types'

export class Item extends Component {
	state = {
		clicked: false,
		checked: false,
		editSwitch: false,
	}

	handleClick = () => {
		this.setState({
			clicked: this.state.clicked ? false : true
		});
	}

	handleChange = ({ target }) => {
		this.props.onCheckedCheck(this.state.checked, this.props.id);
		this.setState({
			checked: target.checked,
		});
	}

	onEditSwitch = () => {
		this.setState({
			editSwitch: true
		});
		this.props.editFlag(this.state.editSwitch, this.props.id);
	}

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
};

Item.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	checked: PropTypes.bool.isRequired,
	edit: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	onPassDelete: PropTypes.func.isRequired,
	onCheckedCheck: PropTypes.func.isRequired,
	editFlag: PropTypes.func.isRequired,
	editColorList: PropTypes.array.isRequired,
}
