import React, { Component } from 'react';
import todoLogo from './todo.png';
import './App.css';
import Todo from "./todo.js";
import data from './todoData.json';

class App extends Component {

  state = {
    title: 'My Todo List',
    data: data
  };

  changeDone = (index) => {
    const newState = this.state;
    if(this.state.data[index].done) {
      newState.data[index].done = false  
    } else {
      newState.data[index].done = true
    }
    this.setState(newState);
    console.log(newState.data[index])
  }
 
  render() {
    const elements = (this.state.data.length < 1 || this.state.data === undefined) ? <p>No items...</p> : this.state.data.map((item, key)=> <Todo
      key={key}
      index={key}
      changeDone = {this.changeDone}
      id={item.id}
      text={item.description}
      date={item.deadline}
      done={item.done}
      />)
    return (
      
      <div className="App">
        <header className="App-header">

          <img src={todoLogo} className="todo-logo" alt="todo" />

          <h1>{this.state.title}</h1>

          <ul>
            {elements}
          </ul>

        </header>
      </div>
    );
  }
}

export default App;
