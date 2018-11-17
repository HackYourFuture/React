import React, { Component } from 'react';
import '../App.css';
import uuid from 'uuid';
import Form from './Form';
import List from './List';
import todos from '../data/todos.json';

class App extends Component {

  state = {
    todos
  };

  handleCheck = id => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }

      }
      return todo;
    });
    this.setState({ todos: newTodos });

  };

  handleAdd = (description, deadline) => {
    const newTodo = {
      id: uuid(),
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
