import React, { Component } from "react";
import "./App.css";
import "./todolist.css";
import TodoList from "./components/TodoList";
import Data from "./components/data.json";
const image =
  "https://i.postimg.cc/gjLMyGks/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Data };
  }

  handelCheck = event => {
    const newData = this.state.Data.slice();

    newData.map(todo => {
      if (todo.id === event.id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({ Data: newData });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
          <p>Todolist Application</p>
        </header>
        <TodoList data={this.state.Data} onCheck={this.handelCheck} />
      </div>
    );
  }
}

export default App;
