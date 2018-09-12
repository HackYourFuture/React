import React, { Component } from "react";
import "./App.css";
import todosJSON from "./Sources/todosJSON.json";
import List from "./Components/List";
import NewTodoForm from "./Components/NewTodoForm";
import uuid from "uuid/v4";

export default class App extends Component {
  state = {
    todos: [...todosJSON],
    newTodo: {
      description: "",
      deadline: "",
      id: ""
    },
    actions: {
      editClicked: false,
      updatedTodo: {
        description: "",
        deadline: "",
        itemID: ""
      }
    }
  };

  handleCheck = item => {
    const { todos } = this.state;
    const todosCopy = todos.map(todo => {
      if (todo.id === item.id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    // ✓
    // console.log(this.state.todos, todosCopy);
    this.setState({ todos: todosCopy });
  };

  handleNewDescription = e => {
    let { newTodo } = this.state;
    newTodo = { ...newTodo, description: e.target.value };

    // ✓
    // console.log(this.state.newTodo, newTodo);
    this.setState({ newTodo });
  };

  handleNewDeadline = e => {
    let { newTodo } = this.state;
    newTodo = { ...newTodo, deadline: e.target.value };

    // ✓
    // console.log(this.state.newTodo, newTodo);
    this.setState({ newTodo });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { todos } = this.state;
    const { description, deadline, id } = this.state.newTodo;
    if (!description || !deadline) return;

    let newTodo = {
      description,
      deadline,
      id: id || uuid(),
      done: false
    };
    const todosCopy = [...todos, newTodo];
    newTodo = {
      description: "",
      deadline: "",
      id: "",
      done: false
    };

    // ✓
    // console.log(this.state.todos, todosCopy);
    this.setState({ todos: todosCopy, newTodo: newTodo });
  };

  handleRemove = index => {
    const { todos } = this.state;
    const newTodos = todos.filter((item, i) => i !== index);

    // ✓
    // console.log(this.state.todos, newTodos);
    this.setState({ todos: newTodos });
  };

  handleEdit = itemID => {
    const { actions, todos } = this.state;
    let actionsCopy = { ...actions, editClicked: true };
    actionsCopy.updatedTodo = { ...actionsCopy.updatedTodo, itemID };

    const todo = todos.filter(todo => todo.id === itemID)[0];
    const description = todo.description;
    const deadline = todo.deadline;
    actionsCopy.updatedTodo = {
      ...actionsCopy.updatedTodo,
      description,
      deadline
    };

    // ✓
    // console.log(this.state.actions.updatedTodo, actionsCopy.updatedTodo);
    this.setState({ actions: actionsCopy });
  };

  handleCancel = () => {
    const actionsCopy = {
      ...this.state.actions,
      editClicked: false
    };
    actionsCopy.updatedTodo = {
      ...actionsCopy.updatedTodo,
      description: "",
      deadline: "",
      itemID: ""
    };

    // ✓
    // console.log(this.state.actions, actionsCopy);
    this.setState({ actions: actionsCopy });
  };

  handleUpdateDescription = e => {
    const { actions } = this.state;
    let actionsCopy = { ...actions };
    actionsCopy.updatedTodo = {
      ...actionsCopy.updatedTodo,
      description: e.target.value
    };

    // ✓
    // console.log(this.state.actions, actionsCopy);
    this.setState({ actions: actionsCopy });
  };

  handleUpdateDeadline = e => {
    const { actions } = this.state;
    let actionsCopy = { ...actions };
    actionsCopy.updatedTodo = {
      ...actionsCopy.updatedTodo,
      deadline: e.target.value
    };

    // ✓
    // console.log(this.state.actions, actionsCopy);
    this.setState({ actions: actionsCopy });
  };

  handleUpdate = itemID => {
    const { todos, actions } = this.state;
    let actionsCopy = { ...actions };

    const todosCopy = todos.map(todo => {
      if (todo.id === itemID) {
        todo = {
          ...todo,
          description: actions.updatedTodo.description,
          deadline: actions.updatedTodo.deadline
        };
        actionsCopy = { ...actionsCopy, editClicked: false };

        actionsCopy.updatedTodo = {
          ...actionsCopy.updatedTodo,
          description: "",
          deadline: "",
          itemID: ""
        };
      }
      return todo;
    });

    // ✓
    // console.log(this.state.todos, todosCopy);
    this.setState({ actions: actionsCopy, todos: todosCopy });
  };

  render() {
    return (
      <div className="App">
        <List
          dataModel={this.state.todos}
          handleCheck={this.handleCheck}
          handleEdit={this.handleEdit}
          handleRemove={this.handleRemove}
          handleUpdate={this.handleUpdate}
          actions={this.state.actions}
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
