import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import logo from './logo.svg';
import TodoItems from './stores/TodoItems';
import AddTodo from "./AddTodo";
import { inject, observer } from "mobx-react";

@inject("TodoListStore")
@observer
class App extends Component {
  render() {
    const { handleChangeCheckBox, onAdd, onDelete, listItems, todoCount } = this.props.TodoListStore;
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img
          src='https://www.mangoapps.com/blog/wp-content/uploads/to-do.jpg'
          className="img" alt="todo-img" width="400" height="260"
        />
        <AddTodo onAdd={onAdd} />
        <TodoItems handleChangeCheckBox={handleChangeCheckBox} listItems={listItems}
          onDelete={onDelete} />
        {(todoCount === 0) ? <h2 className="no-items">No items...</h2> : null}

      </div>
    );
  }
}

export default App;
