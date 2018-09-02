import React, { Component } from "react";
import Todolist from "./component/Todolist";
import "./App.css";
import "./todoapp.css";
import data from "./component/data.json";
import Add from "./component/Add";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: data
    };
  }

  handleChange = todo => {
    const todos = this.state.todos;
    todo.done = !todo.done;
    this.setState({ todos });
  };

  handleDelete = todoId => {
    const todos = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({ todos });
  };
  handleAdd = event => {
    event.preventDefault();

    const todos = this.state.todos;

    const newTodo = {
      id: todos.length + 1,
      description: event.target.description.value,
      deadline: event.target.deadline.value,
      done: false
    };

    this.setState({
      todos: [...todos, newTodo]
    });
    event.target.description.value = "";
    event.target.deadline.value = "";
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="list-header">
            <em>This is my Todo list</em>
          </h1>
        </header>
        <div className="todo-list">
          <Add onAdd={this.handleAdd} />
          <Todolist
            items={this.state.todos}
            handler={this.handleChange}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
