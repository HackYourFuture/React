import React, { Component } from 'react';
import Todos from "./TodoList.js";
import './App.css';
// import CreateState from "./State";
import todosData from './todo.json'
import "./style.css";
import Header from "./Header";
import AddTodo from './add';

// import List from "./List";


class App extends Component {
  state = {
    todos: todosData
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({ todos })
  }
  addTodo = (todo) => {
    const main = this.state.todos.length
    todo.id = main + 1
    const todos = [...this.state.todos, todo]
    this.setState({ todos })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
