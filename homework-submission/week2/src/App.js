import React, { Component } from "react";
import Todolist from "./component/Todolist";
import "./App.css";
import "./todoapp.css";
import data from "./component/data.json";

class App extends Component {
  state = {
    data
  };

  // handleChange = event => {
  //   const targetId = event.target.id;
  //   const todos = this.state.data;
  //   const index = todos.findIndex(
  //     todo => todo.id.toString() === targetId.toString()
  //   );
  //   todos[index].done = !todos[index].done;
  //   this.setState({ todos });
  // };

  handleChange = todoId => {
    const todos = this.state.data;
    todos[todoId - 1].done = !todos[todoId - 1].done;
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
