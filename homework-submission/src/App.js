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
      deadline: ""
    },
    actions: {
      editClicked: false
    }
  };
  handleCheck = item => {
    item.done = !item.done;
    this.setState({ item });
  };

  // handleEdit = (e, item) => {
  //   console.log(item);
  //   console.log("target: ", e.target);

  //   let { actions } = this.state;
  //   actions.editClicked = !this.state.actions.editClicked;
  //   this.setState({ actions });
  // };

  handleUpdate = () => {};

  handleSubmit = e => {
    let { todos } = this.state;
    let newTodo = {
      description: this.state.newTodo.description,
      deadline: this.state.newTodo.deadline,
      id: this.state.newTodo.id || this.state.todos.length + 1, // only because we're working with fake api data
      done: false
    };
    todos = [...todos, newTodo];
    newTodo = {
      description: "",
      deadline: ""
    };
    this.setState({ todos, newTodo });
    e.preventDefault();
  };

  handleRemove = index => {
    console.log("should remove ", index);
    const newTodos = this.state.todos.filter((item, i) => i !== index);
    this.setState({ todos: newTodos });
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
        <NewTodoForm
          newTodo={this.state.newTodo}
          handleSubmit={this.handleSubmit}
          handleNewDescription={this.handleNewDescription}
          handleNewDeadline={this.handleNewDeadline}
        />
        <List
          dataModel={this.state.todos}
          handleCheck={this.handleCheck}
          // handleEdit={this.handleEdit}
          handleUpdate={this.handleUpdate}
          handleRemove={this.handleRemove}
          actions={this.state.actions}
        />
      </div>
    );
  }
}
