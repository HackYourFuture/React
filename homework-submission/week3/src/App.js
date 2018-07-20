import React, { Component } from "react";
import logo from "./logo.svg";
import data from "./todos.json";
// import Checkbox from "./Checkbox";
import AddTodo from "./AddTodo";
import "./App.css";
import UUID from "uuid/v4";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: data
  };

  onChange = event => {
    const id = event.target.id;
    const todos = this.state.todos;

    todos.forEach(todo => {
      if (String(todo.id) === String(id)) {
        todo.done = !todo.done;
      }
    });

    this.setState({ todos });
  };

  removeTodo = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    });
  };

  handleAddTodo = fields => {
    const newId = UUID();
    const newTodos = {
      ...fields,
      id: newId,
      done: false
    };
    this.setState({
      todos: [...this.state.todos, newTodos]
    });
  };

  render() {
    const todoList = this.state.todos;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {todoList.map(todoItem => (
          <TodoList
            handleAddTodo={this.handleAddTodo}
            todoItem={todoItem}
            onChange={this.onChange}
            removeTodo={this.removeTodo}
          />
        ))}
        <AddTodo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
