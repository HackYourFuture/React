import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import TodoList from "./ToDoList";
import todoImage from "./todo.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src={todoImage} alt="background" />
        <ul>
          <TodoList />
        </ul>
      </div>
    );
  }
}

export default App;
