import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';
import AddItemForm from './AddItemForm';

const itemId = 4;

function getIndex(value, arr, prop) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][prop] === value) {
			return i;
		}
	}
	return -1; //to handle the case where the value doesn't exist
}

const App = React.createClass({

	propTypes: ({
		initialItems: React.PropTypes.array.isRequired,
		colors: React.PropTypes.array.isRequired,
	}),

	componentDidMount() {
		window.addEventListener('click', this.clickOutside);
	},

	getInitialState() {
		return {
			items: this.props.initialItems,
			countChecked: false,
			checkedNum: 1,
		}
	},

	onItemAdd(name, color) {
		this.state.items.push({
			name,
			color,
			checked: false,
			edit: false,
			id: itemId,
		});
		this.setState(this.state);
		itemId += 1;
	},

	onItemEdit(name, color, id) {
		const array = this.state.items;
		const index = getIndex(id, array, 'id');
		this.state.items[index].name = name;
		this.state.items[index].color = color;
		this.state.items[index].edit = false;
		this.setState(this.state);
		//console.log('new name: ' + name + ' new color: ' + color + ' id: ' + id);
	},

	onItemDelete(index) {
		this.state.items.splice(index, 1);
		this.setState(this.state);
	},

	onCheckedChecker(checked, id) {
		const array = this.state.items;
		const index = getIndex(id, array, 'id');
		const counter = [];

		if (this.state.items[index].edit === true) {
			this.state.items[index].edit = false;
		}
		this.state.items[index].checked = checked;
		this.setState(this.state);

		this.state.items.forEach((obj, index) => {
			if (obj.checked === true) {
				counter.push(obj);
			}
		});
		if (counter.length > 0) {
			this.state.countChecked = true;
		} else {
			this.state.countChecked = false;
		}
		this.state.checkedNum = counter.length;
	},

	onMultiDelete() {
		const items = this.state.items;
		const keep = [];
		this.state.items.forEach(({ checked }, index) => {
			if (checked !== true) {
				keep.push(items[index]);
			}
		});
		this.setState({
			items: keep,
			countChecked: false,
			checkedNum: 1,
		});
	},

	onEditCheck(flag, id) {
		const array = this.state.items;
		const index = getIndex(id, array, 'id');
		const counter = [];

		this.state.items[index].edit = flag;
		this.setState(this.state);


		this.state.items.forEach((obj, index) => {
			if (obj.edit === true) {
				counter.push(obj);
			}
		});

		if (counter.length > 1) {
			this.state.items.forEach((obj, index) => {
				obj.edit = false;
			});
			this.state.items[index].edit = true;
			this.setState(this.state);

			counter.splice(0, 1);
		}

	},

	clickOutside({ target }) {
		if (!document.querySelector('[data-area]').contains(target)) {
			this.state.items.forEach((obj, index) => {
				if (obj.edit === true) {
					obj.edit = false;
				}
			});
			this.setState(this.state);
		}
	},

	render() {
		return (
			<div className="container">
				<Header checkedItemsFlag={this.state.countChecked} number={this.state.checkedNum} handleDeleteItems={this.onMultiDelete} />
				<ul className="list" data-area>
					{this.state.items.map((item, index) => <Item
						name={item.name}
						color={item.color}
						checked={item.checked}
						edit={item.edit}
						key={item.id}
						id={item.id}
						onCheckedCheck={this.onCheckedChecker}
						onPassDelete={() => { this.onItemDelete(index) }}
						editFlag={this.onEditCheck}
						editColorList={this.props.colors}
						onEdit={this.onItemEdit}
					/>)}
				</ul>
				<AddItemForm onAdd={this.onItemAdd} colorList={this.props.colors} />
			</div>
		);
	}
});

export default App;