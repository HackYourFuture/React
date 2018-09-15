import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import TodoList from './components/TodoList';
import ItemHandler from './components/ItemHandler';

@inject( 'todoStore' )
@observer 

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://chosencalled.files.wordpress.com/2015/07/sharp-res-28.jpg?w=1024&h=1024"
            className="todo-logo"
            alt="TodoList-logo"
          />
          <h1 className="App-title">To Do List</h1>
        </header>
        <br />
        <TodoList/>
        <ItemHandler/>
      </div>
    );
  }
}

export default App;
