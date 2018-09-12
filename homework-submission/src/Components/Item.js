import React, { Component } from "react";
import "./item.css";

import { EnterNewDescription, EnterNewDeadline } from "./UpdateTodo";

export default class Item extends Component {
  render() {
    const {
      todo,
      actions,
      handleUpdateDescription,
      handleUpdateDeadline
    } = this.props;

    const todoItem = (
      <li id={todo.done ? "done" : "not-done"}>
        <span>Description: </span>
        {actions.editClicked && actions.updatedTodo.itemID === todo.id ? (
          <EnterNewDescription
            handleUpdateDescription={handleUpdateDescription}
            actions={actions}
          />
        ) : (
          todo.description
        )}
        <br />
        <span>Deadline: </span>
        {actions.editClicked && actions.updatedTodo.itemID === todo.id ? (
          <EnterNewDeadline
            handleUpdateDeadline={handleUpdateDeadline}
            actions={actions}
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
