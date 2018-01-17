import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import TodoItem from "./todoItem";
import "./styles/todoList.css";

@inject("todoStore")
@observer
export default class TodoList extends Component {
  renderAllTodos = () => {
    const todoItems = this.props.todoStore.todos;
    return todoItems.map(item => {
      return (
        <TodoItem
          key={item.id}
          data={item}
          handleToggleDone={this.handleToggleDone}
        />
      );
    });
  };

  render() {
    console.log("was called");
    if (this.props.todoStore.todos.length === 0) {
      return (
        <h1 className="emptyListHeader">
          No items to show, add a new item above!
        </h1>
      );
    }
    return <ul className="todosContainer">{this.renderAllTodos()}</ul>;
  }
}
