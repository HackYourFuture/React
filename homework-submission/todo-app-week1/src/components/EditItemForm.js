import React from 'react';

const EditItemForm = React.createClass({
	propTypes: {
		editMode: React.PropTypes.bool.isRequired,
		val: React.PropTypes.string.isRequired,
		colorList: React.PropTypes.array.isRequired,
		color: React.PropTypes.string,
	},

	getInitialState() {
		return {
			newName: this.props.val,
			newColor: this.props.color,
		}
	},
	componentWillReceiveProps({editMode, val, color}) {
		if(editMode === false){
			this.setState({ 
				newName: val,
				newColor: color,
			});
		}
	},
	onValueChange({target}) {
		this.state.newName = target.value;
		this.setState(this.state);
	},
	onColorChange({target}) {
		this.state.newColor = target.getAttribute('data-color');
		this.setState(this.state);
	},
	onSubmit(e) {
		e.preventDefault();

		const name = this.state.newName;
		const color = this.state.newColor;
		const id = this.props.id;

		if(name != ''){
			this.props.notifyEdits(name, color, id);
		}
	},
	render() {
		const editClass = this.props.editMode ? 'is--show' : '';

		const radios = this.props.colorList.map(({name, id}, index) => {
			
			const checkedClass = (name == this.state.newColor) ? 'checked' : '';

			return <input type="radio" onChange={this.onColorChange} className={`colorSelector__inputRadio ${name} ${checkedClass}`} name="selectedColor" data-color={name} key={id} />;
		});

		return (
			<form className={`list__form ${editClass}`} onSubmit={this.onSubmit}>
				<input
					className="form__inputText--lg form__inputText--addItem"
					type="text"
					ref="editInput"
					onChange={this.onValueChange}
					value={this.state.newName}
				/>
				<div className="colorSelector">
					{radios}
				</div>
				<input className="form__inputSubmit--inside" type="submit" value="Save" />
			</form>
		);
	}
});

export default EditItemForm;