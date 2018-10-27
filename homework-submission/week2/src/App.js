import React, { Component } from 'react';
import './App.css';
import TodoList from './todo/TodoList';
import todos from './todo/todos';

class App extends Component {
  state = {
    todos,
  };

  handelChange = id => {
    const newTodos = this.state.todos;
    newTodos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  render() {

    return (
      <div className="App">
        <TodoList todos={this.state.todos} onChange={this.handelChange} />
      </div>
    );
  }
}

export default App;
