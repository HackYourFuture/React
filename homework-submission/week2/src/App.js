import React, { Component } from 'react';
import './App.css';
import ListHeader from './components/ListHeader';
import List from './components/List';
import TodoItems from './sources/todoItems.json';

class App extends Component {

  constructor(props){
    super(props);
    const items = localStorage.items !== undefined 
      ?JSON.parse(localStorage.items) 
      : TodoItems;
    this.state = {
      items, 
      newItem: {
        newId: items.length + 1,
        newDescription: '',
        nweDeadLine: '',
      }
    }
  }

  handleChecked = (id) => {
    const newItems = this.state.items.map(item => {
      if (item.id === id) {
      return {...item , done: !item.done}; // used spread operator to reset done for item if the id passed from event match
      }
      return item; // if id doesn't match return item unchanged
    });
    this.setState({ items: newItems });
    localStorage.setItem('items', JSON.stringify(newItems));
  };

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
