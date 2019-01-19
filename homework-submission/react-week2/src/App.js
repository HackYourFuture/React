import React, { Component } from 'react';
import Todo from './todo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "todos": [
        {
          "id": 1,
          "description": "Get out of bed",
          "deadline": "2017-09-11",
          "done": true
        },
        {
          "id": 2,
          "description": "Brush teeth",
          "deadline": "2017-09-10",
          "done": false
        },
        {
          "id": 3,
          "description": "Eat breakfast",
          "deadline": "2017-09-09",
          "done": false
        }
      ]
    };
    this.markAs = this.markAs.bind(this);
  }

  markAs(item) {
    let editedItem = this.state.todos[this.state.todos.indexOf(item)];
    editedItem.done = !editedItem.done;
    this.setState({ todos: this.state.todos });
  }

  render() {
    let list = this.state.todos.map((el) => <Todo key={el.id} todo={el} markAs={this.markAs} />)
    return (
      <ul>
        {this.state.todos[0] ? list : <h2>No items...</h2>}
      </ul>
    );
  }

}


export default App;