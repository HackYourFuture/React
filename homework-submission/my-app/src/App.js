import React, { Component } from 'react';
import './App.css';
import TodoItems from './Components/createDynamicItems';
import Button from './Components/button';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'REACT Lesson',
          deadline: 23 - 3 - 2019,
          key: Date.now(),
        },
        {
          name: 'Wach movie',
          deadline: 23 - 3 - 2019,
          key: Date.now() + 1,
        },
        {
          name: 'Football',
          deadline: 23 - 3 - 2019,
          key: Date.now() + 2,
        },
      ],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== '') {
      let newItem = {
        name: this._inputElement.value,
        key: Date.now(),
      };
      this.setState(PrevState => {
        return {
          items: PrevState.items.concat(newItem),
        };
      });
    }
    this._inputElement.value = ' ';
    e.preventDefault();
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    });
  }
  render() {
    return (
      <div className="TodoListMain">
        <div className="header">
          <h1> Todo APP </h1>
          <form onSubmit={this.addItem}>
            <label>
              TodoItem:
              <input
                type="text"
                name="name"
                value={this.state.name}
                ref={a => (this._inputElement = a)}
                placeholder="Enter your task"
              />
            </label>

            <Button type="submit" name="add" />
          </form>
        </div>

        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}
export default Todolist;
