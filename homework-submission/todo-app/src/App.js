import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import TodoItems from './Components/TodoItems.json';

class App extends Component {
  state = {
    TodoItems
  }

  changeTodo = id => {

    let todos = [...this.state.TodoItems];

    todos.forEach(item => {
      if (item.id === id) {
        item.done = !item.done
      }
    })

    this.setState({
      TodoItems: todos
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
          handler={this.changeTodo}
        />
      </div>
    );
  }
}


export default App;