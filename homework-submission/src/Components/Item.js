import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import "./item.css";
import { EnterNewDescription, EnterNewDeadline } from "./UpdateTodo";

@inject("TodosStore")
@observer
export default class Item extends Component {
  render() {
    const { actions } = this.props.TodosStore;
    const { todo } = this.props;
    const todoItem = (
      <li id={todo.done ? "done" : "not-done"}>
        <span>Description: </span>
        {actions.editClicked && actions.updatedTodo.itemID === todo.id ? (
          <EnterNewDescription />
        ) : (
          todo.description
        )}
        <br />
        <span>Deadline: </span>
        {actions.editClicked && actions.updatedTodo.itemID === todo.id ? (
          <EnterNewDeadline />
        ) : (
          todo.deadline
        )}
        .
      </li>
    );

    return todoItem;
  }
}
