import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';
import uuid from 'uuid/v4';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        desc: 'do first todo.',
        done: true,
      },
      {
        id: 2,
        desc: 'do second todo.',
        done: false,
      },
      {
        id: 3,
        desc: 'do third todo.',
        done: false,
      },
    ],
  };

  // Add Todo
  addTodo = desc => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          desc,
          done: false,
        },
      ],
    });
  };

  // Delete Todo
  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    });
  };

  // Toggle Checkbox
  toggleCheckbox = id => {
    this.setState({
      todos: [
        ...this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      ],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Todos
          // TodoItem Component - Accessing Methods
          todos={todos}
          handleChange={this.toggleCheckbox}
          dltItem={this.deleteTodo}
          toggleCheckbox={this.toggleCheckbox}
          // AddTodo Component - Accessing Method
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
