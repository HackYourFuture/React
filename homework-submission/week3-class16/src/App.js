import React, { Component } from "react";
import "./App.css";
import "./todolist.css";
import TodoList from "./components/TodoList";
import Data from "./Data.json";

const image =
  "https://i.postimg.cc/gjLMyGks/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Data };
  }

  handelCheck = todoId => {
    const newData = this.state.Data.slice();
    newData.forEach(todo => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
    });

    this.setState({ Data: newData });
  };

  handleDelete = todoId => {
    const newData = this.state.Data.slice().filter(todo => {
      return todo.id !== todoId;
    });

    this.setState({ Data: newData });
  };

  handleAddTodo = (description, deadline) => {
    const id = Math.max(...this.state.Data.map(todo => todo.id), 0) + 1;
    const newTodos = this.state.Data;
    const newTodo = {
      id,
      description,
      deadline,
      done: false
    };

    this.setState({
      Data: [...newTodos, newTodo]
    });
  };
  handelUpdate = (todoId, description, deadline) => {
    const newData = this.state.Data.slice().map(todo => {
      if (todo.id === todoId) {
        if (description && deadline) {
          return { ...todo, description: description, deadline: deadline };
        }
        if (description) {
          return {
            ...todo,
            deadline: todo.deadline,
            description: description
          };
        }
        if (deadline) {
          return {
            ...todo,
            description: todo.description,
            deadline: deadline
          };
        }
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
