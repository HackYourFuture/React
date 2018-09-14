import React, { Component } from "react";
import "./item.css";

import { EnterNewDescription, EnterNewDeadline } from "./UpdateTodo";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
export default class Item extends Component {
  render() {
    const { updatedTodo } = this.props.TodoStore;
    const { renderedTodo } = this.props;

    const todoItem = (
      <li id={renderedTodo.done ? "done" : "not-done"}>
        <span>Description: </span>
        {updatedTodo.id === renderedTodo.id ? (
          <EnterNewDescription />
        ) : (
          renderedTodo.description
        )}
        <br />
        <span>Deadline: </span>
        {updatedTodo.id === renderedTodo.id ? (
          <EnterNewDeadline />
        ) : (
          renderedTodo.deadline
        )}
        .
      </li>
    );

    return todoItem;
  }
}
