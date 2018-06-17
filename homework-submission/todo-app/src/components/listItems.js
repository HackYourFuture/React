import React, { Component } from "react";
import Todos from "./todos.json";
import "../App.css";
import TodoItems from "./TodoItems";

class ListItems extends Component {
  constructor() {
    super();
    this.state = {
      todos: Todos
    };
  }
  clickNotHandler = event => {
    const changedId = event.target.id;
    const todos = this.state.todos;
    const index = todos.findIndex(
      todo => todo.id.toString() === changedId.toString()
    );
    todos[index].done = !todos[index].done;
    this.setState({ todos: todos });
  };
  render() {
    const todos = this.state.todos;
    const todoItems = todos.map(todo => (
      <TodoItems
        key={todo.id}
        todo={todo}
        clickHandler={this.clickNotHandler}
      />
    ));
    return <ol>{todoItems}</ol>;
  }
}
export default ListItems;
