import React, { Component } from "react";
import logo from "./logo.svg";
import AddTodo from "./AddTodo";
import "./App.css";
import UUID from "uuid/v4";
import TodoList from "./TodoList";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class App extends Component {
  onChange = event => {
    const id = event.target.id;
    this.props.todoStore.toggleTodo(id);
  };

  removeTodo = id => {
    this.props.todoStore.removeTodo(id);
  };

  handleAddTodo = fields => {
    const newTodo = { ...fields, id: UUID(), done: false };
    this.props.todoStore.addTodo(newTodo);
  };

  render() {
    const { todos } = this.props.todoStore;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {todos.map(todoItem => (
          <TodoList
            key={todoItem.id}
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
