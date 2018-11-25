import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class EditItemForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newName: this.props.val,
			newColor: this.props.color
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.editMode === false) {
			this.setState({
				newName: prevProps.val,
				newColor: prevProps.color
			})
		}
	}
	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	if (prevState.editMode === false) {
	// 		return { newName: nextProps.val, newColor: nextProps.color }
	// 	} else return null
	// }

	onValueChange = ({ target }) => {
		this.setState({
			newName: target.value
		})
	}

	onColorChange = ({ target }) => {
		this.setState({
			newColor: target.getAttribute('data-color')
		})
	}

	onSubmit = e => {
		e.preventDefault()

		const name = this.state.newName
		const color = this.state.newColor
		const id = this.props.id

		if (name !== '') {
			this.props.notifyEdits(name, color, id)
		}
	}

	render() {
		const editClass = this.props.editMode ? 'is--show' : ''

		const radios = this.props.colorList.map(({ name, id }, index) => {
			const checkedClass = name === this.state.newColor ? 'checked' : ''

			return (
				<input
					type="radio"
					onChange={this.onColorChange}
					className={`colorSelector__inputRadio ${name} ${checkedClass}`}
					name="selectedColor"
					data-color={name}
					key={id}
				/>
			)
		})

		return (
			<form className={`list__form ${editClass}`} onSubmit={this.onSubmit}>
				<input
					className="form__inputText--lg form__inputText--addItem"
					type="text"
					ref={this.inputField}
					onChange={this.onValueChange}
					value={this.state.newName}
				/>
				<div className="colorSelector">{radios}</div>
				<input
					className="form__inputSubmit--inside"
					type="submit"
					value="Save"
				/>
			</form>
		)
	}
}

EditItemForm.propTypes = {
	editMode: PropTypes.bool.isRequired,
	val: PropTypes.string.isRequired,
	colorList: PropTypes.array.isRequired,
	color: PropTypes.string
}