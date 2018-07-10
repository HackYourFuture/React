import React, { Component } from 'react';
import './App.css';
import Header from './todoapp/Header';
import TodoList from './todoapp/TodoList';
import Photo from './todoapp/Picture';
import logo from './logo.svg';
import Form from './todoapp/Form';
import todos from './todos.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };
  }
  addTodoItem = (e) => {
    e.preventDefault();
    const newTodo = {
      "id": this.state.todos.length + 1,
      "description": e.target.description.value,
      "deadline": e.target.deadline.value,
      "done": false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  clickNotHandler = (event) => {
    const changedId = event.target.id;
    const todos = this.state.todos;
    const index = todos.findIndex(todo => todo.id.toString() === changedId.toString());
    todos[index].done = !todos[index].done;
    this.setState({ todos: todos });
  };
  removeHandler = (item) => {
    const newList = this.state.todos.filter((elem) => elem !== item);
    this.setState({ todos: newList });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Todo App</h1>
        </header>
        <Header />
        <Form addTodoItem={this.addTodoItem} />
        <TodoList todos={this.state.todos} clickHandler={this.clickNotHandler} removeHandler={this.removeHandler} />
        <Photo />
      </div >
    );
  }
}
export default App;
