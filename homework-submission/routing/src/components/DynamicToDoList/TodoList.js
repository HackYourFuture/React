import React, { Component } from 'react';
import TodoItems from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  addItem = e => {
    e.preventDefault();
    if (this._inputElement.value !== '') {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState(prevState => {
        return { items: prevState.items.concat(newItem) };
      });
    }
    this._inputElement.value = '';
  };
  deleteItem = key => {
    const filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    });
  };
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>ToDo app</h1>
          <form onSubmit={this.addItem}>
            <input ref={a => (this._inputElement = a)} placeholder="Enter task" />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
