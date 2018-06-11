import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Description from './components/Description';
import Todolist from "./components/Todolist.json";

class App extends Component {
  render() {
    const listItem = Todolist.map((item,i)=>
            <li key={"item_"+i}>{item.description} , {item.deadline}</li>
            );
    return (
      <div className="App">
        <Header className="App-header" title="Todo List" />
        <Description id="todo-items" todo={listItem}/>
      </div>
    );
  }
}

export default App;
