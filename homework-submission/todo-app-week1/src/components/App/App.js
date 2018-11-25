import React, { Component, useState } from 'react';
import { Header, Item, AddItemForm } from '../';
import { ITEMS, COLORS } from '../../state'
import { Layout } from '../Layout'
import './App.css';



function getIndex(value, arr, prop) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][prop] === value) {
      return i;
    }
  }
  return -1;
}

export class App extends Component {

  state = {
    items: ITEMS,
    countChecked: false,
    checkedNum: 0,
  }

  onItemAdd = (name, color) => {




    let itemId = 4;
    itemId += 1;

    this.setState(
      {
        items:
          [...this.state.items,
          {
            name,
            color,
            checked: false,
            edit: false,
            id: itemId
          }]
      })

  }

  onItemEdit = (name, color, id) => {
    const array = this.state.items;
    const index = getIndex(id, array, 'id');
    this.setState(prevState => {
      const newItems = [...prevState.items];
      newItems[index].name = name;
      newItems[index].color = color;
      newItems[index].edit = false;
      return { items: newItems };
    })
    // this.state.items[index].name = name;
    // this.state.items[index].color = color;
    // this.state.items[index].edit = false;
    // this.setState(this.state);
  }

  onItemDelete = (index) => {
    this.state.items.splice(index, 1);
    this.setState(this.state);

    // this.setState((state) => {
    //   return {items: state.items.splice(index, 1)};
    // });
  }

  onCheckedChecker = (checked, id) => {
    const array = this.state.items;
    const index = getIndex(id, array, 'id');
    const counter = [];

    console.group('Action ------->')
    console.log(index, array[0].checked)
    if (this.state.items[index].edit === true) {
      this.setState(prevState => {
        const newItems = [...prevState.items];
        newItems[index].edit = false;
        return { items: newItems };
      })
    }

    // Fix me
    this.setState(prevState => {
      const newItems = [...prevState.items];
      newItems[index].checked = checked;
      return { items: newItems };
    }, () => {
      console.log(this.state)
      console.groupEnd()
    })
    console.log(this.state.items[0].checked)

    if (counter.length > 0) {
      this.setState({
        countChecked: !this.state.countChecked
      })
    }

    this.setState({
      checkedNum: counter.length
    })
  }

  onMultiDelete = () => {
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

  }

  onEditCheck = (flag, id) => {
    const array = this.state.items;
    const index = getIndex(id, array, 'id');
    const counter = [];

    this.setState(prevState => {
      const newItems = [...prevState.items];
      newItems[index].edit = flag;
      return { items: newItems };
    })

    this.state.items.forEach((obj, index) => {
      if (obj.edit === true) {
        counter.push(obj);
      }
    });

    if (counter.length > 1) {
      this.state.items.forEach((obj, index) => {
        obj.edit = false;
      });
      this.setState(prevState => {
        const newItems = [...prevState.items];
        newItems[index].edit = true;
        return { items: newItems };
      })

      counter.splice(0, 1);
    }

  }

  clickOutside = ({ target }) => {
    if (!document.querySelector('[data-area]').contains(target)) {
      this.state.items.forEach((obj, index) => {
        if (obj.edit === true) {
          obj.edit = false;
        }
      });
      this.setState(this.state);
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.clickOutside);
  }

  render() {
    return (
      <div className="container">
        <Header checkedItemsFlag={this.state.countChecked} number={this.state.checkedNum} handleDeleteItems={this.onMultiDelete} />
        <ul className="list" data-area>
          {this.state.items.map((item, index) => (
            <Item
              name={item.name}
              color={item.color}
              checked={item.checked}
              edit={item.edit}
              key={item.id}
              id={item.id}
              onCheckedCheck={this.onCheckedChecker}
              onPassDelete={() => { this.onItemDelete(index) }}
              editFlag={this.onEditCheck}
              editColorList={COLORS}
              onEdit={this.onItemEdit}
            />
          ))}
        </ul>
        <AddItemForm onAdd={this.onItemAdd} colorList={COLORS} />
      </div>
    );
  }
}