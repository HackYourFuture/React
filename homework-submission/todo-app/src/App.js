import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import TodoItems from './Components/TodoItems.json';

class App extends Component {
  state = {
    TodoItems
  }

  changeTodo = event => {
    let todos = [...this.state.TodoItems];
    todos[event.target.id - 1].done = !todos[event.target.id - 1].done;
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do list</h1>
        </header>
        <Todos
          items={this.state.TodoItems}
          handler={this.handler}
        />
      </div>
    );
  }
}


export default App;