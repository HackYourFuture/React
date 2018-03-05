import React, { Component } from 'react';
import "./style.css"
import Header from "./components/Header.js"
import TodoList from "./components/TodoList"


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
