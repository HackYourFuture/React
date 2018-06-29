import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Photo from "./components/photo";
import Add from "./components/add";
import Todos from "./components/todos.json";
import TodoItems from "./components/todoItems";

class App extends Component {
  state = { data: Todos };

  check = item => {
    item.done = !item.done;
    this.setState({ data: this.state.data });
  };

  add = e => {
    e.preventDefault();
    const newTodo = {
      id: this.state.data.length + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    };
    this.setState({ data: this.state.data.concat(newTodo) });
  };

  remove = (e, item) => {
    e.preventDefault();
    const newTodoItems = this.state.data.filter(elem => elem !== item);
    this.setState({ data: newTodoItems });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Add addHandler={this.add} />
        <TodoItems
          id="todo-items"
          checkHandler={this.check}
          state={this.state}
          removeHandler={this.remove}
        />
        <Photo />
      </div>
    );
  }
}

export default App;
