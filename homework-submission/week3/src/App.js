import React, { Component } from "react";
import logo from "./logo.svg";
import todos from "./todos.json";
import Checkbox from "./Checkbox";
import AddTodo from "./AddTodo";
import "./App.css";

class App extends Component {
  state = {
    todos
  };

  onChange = event => {
    const id = event.target.id;
    const todos = this.state.todos;

    todos.forEach(todo => {
      if (String(todo.id) === String(id)) {
        todo.done = !todo.done;
      }
    });

    this.setState({ todos });
  };
  addNewTodo = add => {
    const newTodo = {
      description: add.description,
      deadline: add.deadline
    };
    this.setState({
      todos: this.state.todos.concat([newTodo])
    });
    //const newId = uuid();
  };

  render() {
    const todoItems = this.state.todos.map(todo => (
      <Checkbox key={todo.id} todo={todo} onChange={this.onChange} />
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddTodo addNewTodo={this.addNewTodo} />
        <ul>{todoItems.length > 0 ? todoItems : <p>No items</p>}</ul>
      </div>
    );
  }
}

export default App;
