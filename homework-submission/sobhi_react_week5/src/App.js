import React, { Component } from 'react';
import './App.css';
import { observer, inject } from "mobx-react"
import TodoList from "./TodoList"

@inject("TodoItemsStore")
@observer

class App extends Component {

  render() {
    const { todoItems } = this.props.TodoItemsStore;

    console.log(this.props.TodoItemsStore);
    return (
      <div className="App">
        <TodoList todoItems={todoItems} />
      </div>
    );
  }
}

export default App;
