import React, { Component } from "react";

import TodoItem from "./TodoItem";
import "./styles/todoList.css";

export default class TodoList extends Component {
  state = {
    toBeUpdatedItem: "",
    toBeUpdatedDeadline: ""
  };

  handleCancelEdit = () => {
    this.props.handleToggleEdit(null, true);
  };

  handleToggleEdit = id => {
    const todoItem = this.props.todos.find(item => item.id === id);
    this.setState({
      toBeUpdatedDeadline: todoItem.deadline,
      toBeUpdatedItem: todoItem.text
    });
    this.props.handleToggleEdit(id);
  };

  handleUpdate = id => {
    const { toBeUpdatedItem, toBeUpdatedDeadline } = this.state;
    this.props.handleUpdate(id, toBeUpdatedItem, toBeUpdatedDeadline);
  };

  handleChangeItem = event => {
    this.setState({ toBeUpdatedItem: event.target.value });
  };

  handleChangeDeadline = event => {
    this.setState({ toBeUpdatedDeadline: event.target.value });
  };

  handleToggleDone = id => {
    this.props.handleToggleDone(id);
  };

  renderAllTodos = () => {
    const todoItems = this.props.todos;
    return todoItems.map(item => {
      return (
        <TodoItem
          key={item.id}
          data={item}
          handleToggleDone={this.handleToggleDone}
          handleRemove={this.props.handleRemove}
          isEditing={this.props.isEditing === item.id}
          handleCancelEdit={this.handleCancelEdit}
          handleToggleEdit={this.handleToggleEdit}
          handleUpdate={this.handleUpdate}
          toBeUpdatedItem={this.state.toBeUpdatedItem}
          toBeUpdatedDeadline={this.state.toBeUpdatedDeadline}
          handleChangeItem={this.handleChangeItem}
          handleChangeDeadline={this.handleChangeDeadline}
        />
      );
    });
  };

  render() {
    return (
      <ul className="todosContainer">
        {this.props.todos.length === 0 ? ( //is it empty?
          <h1 className="emptyListHeader">No items to show</h1>
        ) : (
          this.renderAllTodos()
        )}
      </ul>
    );
  }
}
