import React, { Component } from 'react';
import './App.css';
import ListHeader from './components/ListHeader';
import List from './components/List';
import TodoItems from './sources/todoItems.json';

class App extends Component {
  state = {
    items: localStorage.items !== undefined ? JSON.parse(localStorage.items) : TodoItems,
    newItem: {
      newId: localStorage.items !== undefined ? (JSON.parse(localStorage.items).length + 1) : (TodoItems.length + 1),
      newDescription: '',
      newDeadLine: '',
      newState: false,
    }
  };

  handleChecked = (id) => {
    let newState = Object.assign({}, this.state);
    const indexOfItem = newState.items.findIndex(item => item.id === id);
    let targetItem = newState.items[indexOfItem];
    if (indexOfItem >= 0) {
      targetItem.done === true
        ? (targetItem.done = false)
        : (targetItem.done = true);
    }
    localStorage.setItem("items", JSON.stringify(newState.items));
    this.setState({ items: newState.items });
  };

  componentDidMount() {
    let itemsCopy = localStorage.items;

    if (itemsCopy !== undefined) {
      this.setState({ items: JSON.parse(itemsCopy) });
    }
  }

  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img
            src="https://russellinvestments.com/-/media/images/au/tiles/todolist.png"
            className="App-logo"
            alt="logo"
          />
          <ListHeader className="todo-list" Title="Todo List" />
        </header>
        <List 
          handleChecked={this.handleChecked}
          todoItems={this.state.items}
        />
      </React.Fragment>
    );
  }
}

export default App;
