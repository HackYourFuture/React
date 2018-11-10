import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';
import todos from '../data/todos.json';

class App extends Component {

  state = {
    todos
  };

  handleCheck = id => {
    const newTodos = this.state.todos;
    newTodos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done

      }
      return todo;
    });
    this.setState({ todos: newTodos });

  };

  handleAdd = (description, deadline) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      description,
      deadline: deadline.toLocaleDateString(),
      done: false
    }

    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos })
  }

  handleRemove = (id) => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div className="App">
        <Form
          onAdd={this.handleAdd}

        />
        <List
          handleCheck={this.handleCheck}
          todos={this.state.todos}
          handleRemove={this.handleRemove}

        />
      </div>
    );
  }
}

export default App;
