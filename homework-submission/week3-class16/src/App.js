import React, { Component } from "react";
import "./App.css";
import "./todolist.css";
import TodoList from "./components/TodoList";
import Data from "./Data.json";

const image =
  "https://i.postimg.cc/gjLMyGks/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png";

class App extends Component {
  state = { Data };

  handelCheck = todoId => {
    const newData = this.state.Data.map(todo => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({ Data: newData });
  };

  handleDelete = todoId => {
    const newData = this.state.Data.filter(todo => {
      return todo.id !== todoId;
    });

    this.setState({ Data: newData });
  };

  handleAddTodo = (description, deadline) => {
    const id = Math.max(...this.state.Data.map(todo => todo.id), 0) + 1;

    const newTodo = {
      id,
      description,
      deadline,
      done: false
    };

    this.setState({ Data: [...this.state.Data, newTodo] });
  };
  handelUpdate = (todoId, description, deadline) => {
    const newData = this.state.Data.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          description: description || todo.description,
          deadline: deadline || todo.deadline
        };
      }
      return todo;
    });
    this.setState({ Data: newData });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
          <p>Todolist Application</p>
        </header>

        <TodoList
          data={this.state.Data}
          handleOnCheck={this.handelCheck}
          handleOnDelete={this.handleDelete}
          OnUpdate={this.handelUpdate}
          onAddTodo={this.handleAddTodo}
        />
      </div>
    );
  }
}

export default App;
