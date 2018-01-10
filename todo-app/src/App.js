//jshint esnext: true

import React from "react";

import TodoList from "./Components/TodoList";
import AddTodoItem from "./Components/AddTodoItem";
import { loadTodos, setTodos } from "./storage/storage";
import "./App.css";

export default class App extends React.Component {
  state = {
    todos: loadTodos(),
    isEditing: null
  };

  addNewTodos = todos => {
    this.setState({ todos });
    setTodos(todos);
  };

  handleToggleEditing = (id, cancel) => {
    this.setState({ isEditing: cancel ? null : id });
  };

  handleAddTodo = (text, deadline) => {
    let newId;
    if (this.state.todos.length > 1) {
      let allIds = this.state.todos.map(a => a.id);
      newId = allIds.reduce((a, b) => Math.max(a, b), 0) + 1; // the max value in the id's + 1
    } else {
      newId = this.state.todos.length;
    }
    const newItem = {
      id: newId,
      text,
      deadline,
      done: false
    };
    const oldTodos = this.state.todos || [];

    this.addNewTodos([...oldTodos, newItem]);
  };

  handleToggleDone = id => {
    const newTodos = [...this.state.todos].map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    this.addNewTodos(newTodos);
  };

  handleRemove = id => {
    const newTodos = [...this.state.todos].filter(item => item.id !== id);
    this.addNewTodos(newTodos);
  };

  handleUpdate = (id, newText, newDeadline) => {
    const newTodos = [...this.state.todos].map(item => {
      if (item.id === id) {
        item.text = newText;
        item.deadline = newDeadline;
      }
      return item;
    });
    this.setState({
      isEditing: null
    });
    this.addNewTodos(newTodos);
  };

  render() {
    return (
      <div>
        <h1 className="pageHeader">TODO LIST</h1>
        <AddTodoItem handleAddTodo={this.handleAddTodo} />
        <TodoList
          isEditing={this.state.isEditing}
          handleToggleEdit={this.handleToggleEditing}
          todos={this.state.todos}
          handleToggleDone={this.handleToggleDone}
          handleRemove={this.handleRemove}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
