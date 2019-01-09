import React, { Component } from 'react';
import Todo from './todo.js';
import './App.css';

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
  }
  render() {
    if (!this.state) {
      return <h2>No items...</h2>;
    } else {
      return (
        <div>
          {this.state.todos.map((el) => {
            return (<Todo key={el.id} description={el.description} deadline={el.deadline} done={el.done} />)
          })}
        </div>
      );
    }

  }
}

export default App;