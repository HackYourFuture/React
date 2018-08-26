import React, { Component } from "react";
import Todolist from "./component/Todolist";
import "./App.css";
import "./todoapp.css";
import data from "./component/data.json";

class App extends Component {
  state = {
    data
  };

  handleChange = todo => {
    const todos = this.state.data;
    todo.done = !todo.done;
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="list-header">
            <em>This is my Todo list</em>
          </h1>
        </header>
        <div className="todo-list">
          <Todolist items={this.state.data} handler={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default App;
