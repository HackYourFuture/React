import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todoitems from './components/Todoitems';
import AddTodo from "./components/AddTodo";
import {inject,observer} from "mobx-react";

@inject("TodoListStore")
@observer
class App extends Component {
  render() {
    const {checkHandler,addHandler,removeHandler,listItems,todoCount} = this.props.TodoListStore;
    return (
      <div className="App">
        <Header className="App-header" title="To Do List" />
        <AddTodo addHandler={addHandler}/>
        <Todoitems id="todo-items" checkHandler={checkHandler} listItems={listItems}
          removeHandler={removeHandler}/>
        {(todoCount === 0) ? <h2 className="no-items">No items...</h2> : null}
      </div>
    );
  }
}

export default App;
