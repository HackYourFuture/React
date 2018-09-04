import React, { Component } from "react";
import "./App.css";
import todosJSON from "./Sources/todosJSON.json";
import List from "./Components/List";
import NewTodoForm from "./Components/NewTodoForm";

export default class App extends Component {
  state = {
    todos: todosJSON,
    newTodo: {
      description: "",
      deadline: undefined,
      id: undefined
    },
    actions: {
      editClicked: false
    }
  };
  handleCheck = item => {
    item.done = !item.done;
    this.setState({ item });
  };

  handleEdit = (e, item) => {
    const { actions } = this.state;
    actions.editClicked = !this.state.actions.editClicked;
    this.setState({ actions });
  };

  handleUpdate = () => {};

  handleSubmit = e => {
    e.preventDefault();
    let { todos } = this.state;
    let { description, deadline, id } = this.state.newTodo;
    if (!description || !deadline) return;
    let newTodo = {
      description,
      deadline,
      id: this.state.newTodo.id || this.state.todos.length + 1, // only because we're working with fake api data
      done: false
    };
    todos = [...todos, newTodo];
    newTodo = {
      description: "",
      deadline: undefined
    };
    this.setState({ todos, newTodo });
  };

  handleRemove = index => {
    console.log("should remove ", index);
    const { todos } = this.state;
    const newTodos = todos.filter((item, i) => i !== index);
    const removedTodo = todos[index];
    this.setState({ todos: newTodos });

    //TODO: display this message when removing with undo button,
    // when clicked it reassign the removed todo to the todos array
    // this.setState({ todos })
    console.log(`you removed '${removedTodo.description}', undo?`);
  };

  handleNewDescription = e => {
    console.log(e.target.value);
    const { newTodo } = this.state;
    newTodo.description = e.target.value;
    this.setState({ newTodo });
  };
  handleNewDeadline = e => {
    console.log(e.target.value);
    const { newTodo } = this.state;
    newTodo.deadline = e.target.value;
    this.setState({ newTodo });
  };

  render() {
    return (
      <div className="App">
        <List
          dataModel={this.state.todos}
          handleCheck={this.handleCheck}
          handleEdit={this.handleEdit}
          handleUpdate={this.handleUpdate}
          handleRemove={this.handleRemove}
          actions={this.state.actions}
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
