import React, { Component } from "react";
import "./App.css";
import todosJSON from "./Sources/todosJSON.json";
import List from "./Components/List";
import NewTodoForm from "./Components/NewTodoForm";
import uuid from "uuid/v4";

const TODO_TEMPLATE = {
  description: "",
  deadline: null,
  id: null,
  done: false
};

export default class App extends Component {
  state = {
    todos: [...todosJSON],
    updatedTodo: { ...TODO_TEMPLATE },
    newTodo: { ...TODO_TEMPLATE }
  };

  handleToggleCheck = item => {
    const todos = [...this.state.todos];
    const todosCopy = todos.map(todo => {
      if (todo.id !== item.id) return todo;
      return { ...todo, done: !todo.done };
    });

    this.setState({ todos: todosCopy });
  };

  handleNewDescription = e => {
    const newTodo = { ...this.state.newTodo };
    newTodo.description = e.target.value;

    this.setState({ newTodo });
  };

  handleNewDeadline = e => {
    let newTodo = { ...this.state.newTodo };
    newTodo.deadline = e.target.value;

    this.setState({ newTodo });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newTodo = { ...this.state.newTodo };
    if (!newTodo.description || !newTodo.deadline) return;

    newTodo = { ...newTodo, id: newTodo.id || uuid() };
    const todos = [...this.state.todos, newTodo];
    newTodo = TODO_TEMPLATE;

    this.setState({ todos, newTodo });
  };

  handleRemove = itemID => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== itemID);

    this.setState({ todos: newTodos });
  };

  handleEdit = itemID => {
    const todos = [...this.state.todos];
    const updatedTodo = todos.find(todo => todo.id === itemID);

    this.setState({ updatedTodo });
  };

  handleCancel = () => {
    const updatedTodo = { ...TODO_TEMPLATE };

    this.setState({ updatedTodo });
  };

  handleUpdateDescription = e => {
    const updatedTodo = { ...this.state.updatedTodo };
    updatedTodo.description = e.target.value;

    this.setState({ updatedTodo });
  };

  handleUpdateDeadline = e => {
    const updatedTodo = { ...this.state.updatedTodo };
    updatedTodo.deadline = e.target.value;

    this.setState({ updatedTodo });
  };

  handleUpdate = itemID => {
    const todos = [...this.state.todos];
    let updatedTodo = { ...this.state.updatedTodo };

    const updatedTodos = todos.map(todo => {
      if (todo.id !== itemID) return todo;
      return (todo = { ...updatedTodo });
    });

    updatedTodo = { ...TODO_TEMPLATE };

    this.setState({ todos: updatedTodos, updatedTodo });
  };

  render() {
    return (
      <div className="App">
        <List
          dataModel={this.state.todos}
          updatedTodo={this.state.updatedTodo}
          handleToggleCheck={this.handleToggleCheck}
          handleEdit={this.handleEdit}
          handleRemove={this.handleRemove}
          handleUpdate={this.handleUpdate}
          handleUpdateDescription={this.handleUpdateDescription}
          handleUpdateDeadline={this.handleUpdateDeadline}
          handleCancel={this.handleCancel}
        />
        <NewTodoForm
          newTodo={this.state.newTodo}
          handleSubmit={this.handleSubmit}
          handleNewDescription={this.handleNewDescription}
          handleNewDeadline={this.handleNewDeadline}
        />
      </div>
    );
  }
}
