import React, { Component } from "react";
import "./item.css";

import { EnterNewDescription, EnterNewDeadline } from "./UpdateTodo";

export default class Item extends Component {
  render() {
    const {
      todo,
      updatedTodo,
      handleUpdateDescription,
      handleUpdateDeadline
    } = this.props;

    const todoItem = (
      <li id={todo.done ? "done" : "not-done"}>
        <span>Description: </span>
        {updatedTodo.id === todo.id ? (
          <EnterNewDescription
            handleUpdateDescription={handleUpdateDescription}
            updatedTodo={updatedTodo}
          />
        ) : (
          todo.description
        )}
        <br />
        <span>Deadline: </span>
        {updatedTodo.id === todo.id ? (
          <EnterNewDeadline
            handleUpdateDeadline={handleUpdateDeadline}
            updatedTodo={updatedTodo}
          />
        ) : (
          todo.deadline
        )}
        .
      </li>
    );

    return todoItem;
  }
}
