import React, { Component } from "react";
import "./App.css";
import todosJSON from "./Sources/todosJSON.json";
import List from "./Components/List";

export default class App extends Component {
  state = {
    todos: [...todosJSON]
  };

  handleChecked = item => {
    const { todos } = this.state;
    const newlist = todos.map(todo => {
      if (todo.id === item.id) {
        item.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todos: newlist });
  };

  render() {
    return (
      <div className="App">
        <List dataModel={this.state.todos} handleChecked={this.handleChecked} />
      </div>
    );
  }
}
