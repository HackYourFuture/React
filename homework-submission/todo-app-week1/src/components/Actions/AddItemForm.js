import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class AddItemForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			color: 'red',
		};
	}

	onSubmit = (e) => {
		e.preventDefault();

		const name = this.state.name;
		const color = this.state.color;

		if (name !== '') {
			this.props.onAdd(name, color);
			this.setState({
				name: '',
				color: 'red'
			});
		}
	}

	onNameChange = ({ target }) => {
		this.setState({
			name: target.value
		});
	}

	onColorChange = ({ target }) => {

		this.setState({
			color: target.getAttribute('data-color')
		});
	}

	render() {

		const radios = this.props.colorList.map((color, index) => {
			if (this.state.color === color.name) {
				color.checked = true;
			} else {
				color.checked = false;
			}
			const checkedClass = color.checked ? 'checked' : '';
			return (
				<input type="radio" onChange={this.onColorChange} className={`colorSelector__inputRadio ${color.name} ${checkedClass}`} name="selectedColor" data-color={color.name} key={color.id} />
			);
		});

		return (
			<form onSubmit={this.onSubmit}>
				<input className="form__inputText--lg form__inputText--addItem" type="text" name="name" value={this.state.name} onChange={this.onNameChange} placeholder="Add New Item" />
				<div className="colorSelector">
					{radios}
				</div>
				<input className="form__inputSubmit--inside" type="submit" value="Add" />
			</form>
		);
	}
}

AddItemForm.propTypes = {
	onAdd: PropTypes.func.isRequired,
	colorList: PropTypes.array.isRequired,
}