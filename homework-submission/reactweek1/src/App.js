import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList.js';


class App extends Component {
  render() {
    return(
    <div className="App">
      <header className="App-header">
        <img src="https://chosencalled.files.wordpress.com/2015/07/sharp-res-28.jpg?w=1024&h=1024" className ="todo-logo"  alt="TodoList-logo" />
        <h1 className="App-title">To Do List</h1>
      </header>
      <br />
      <ul>
        <ToDoList deadLine="Wed Sep 13 2017" description="Get out of bed" />
        <ToDoList deadLine="Thu Sep 14 2017" description="Brush teeth" />
        <ToDoList deadLine="Fri Sep 15 2017" description="Eat breakfast" />
      </ul>
    </div>);
      }
    }
    
    export default App;
