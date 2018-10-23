import React, { Component } from 'react';
import Todos from './todos';
import todosData from './data/todos.json'
import './App.css';


class App extends Component {
  state = {
    todos: todosData
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  checkBoxHandler = (id) => {
    const todos = this.state.todos.map(item => {
      if (item.id === id) {
        return {
          ...item, done: !item.done
        }
      }
      return item;
    });
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} handleClick={this.checkBoxHandler} />
      </div>
    );
  }
}

export default App;
