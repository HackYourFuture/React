import React, { Component } from "react";
import "./App.css";
import todosJSON from "./Sources/todosJSON.json";
import List from "./Components/List";

export default class App extends Component {
  state = {
    todos: todosJSON
  };
  handleChecked = item => {
    item.done = !item.done;
    this.setState({ item });
  };
  render() {
    return (
      <div className="App">
        <List dataModel={this.state.todos} handleChecked={this.handleChecked} />
      </div>
    );
  }
}
