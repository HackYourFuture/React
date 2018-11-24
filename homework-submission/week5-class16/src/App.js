import React, { Component } from "react";
import Todolist from "./components/TodoList";
import "./App.css";
import "./todos.css";
const image =
  "https://i.postimg.cc/gjLMyGks/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
          <p>Todolist Application</p>
        </header>
        <Todolist />
      </div>
    );
  }
}

export default App;
