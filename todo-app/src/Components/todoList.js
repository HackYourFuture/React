import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import loadingImage from "./styles/images/loader.gif";
import TodoItem from "./TodoItem";
import "./styles/todoList.css";

@inject("todoStore")
@observer
export default class TodoList extends Component {
  componentDidMount() {
    this.props.todoStore.loadTodos();
  }

  renderAllTodos = () => {
    const todoItems = this.props.todoStore.todos;
    return todoItems.map(item => {
      return (
        <TodoItem
          key={item._id}
          data={item}
          handleToggleDone={this.handleToggleDone}
        />
      );
    });
  };

  render() {
    if (this.props.todoStore.loading) {
      return <img src={loadingImage} alt="loading" className="loadingImg" />;
    }
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
