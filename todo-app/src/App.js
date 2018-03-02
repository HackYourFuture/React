import React, { Component } from 'react';
import "./style.css"
import Header from "./components/header.js"
import TodoList from "./components/todoList"


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;
