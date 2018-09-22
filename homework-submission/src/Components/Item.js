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
    const Description = () => {
      return updatedTodo.id === renderedTodo.id ? (
        <EnterNewDescription />
      ) : (
        renderedTodo.description
      );
    };
    const Deadline = () => {
      return updatedTodo.id === renderedTodo.id ? (
        <EnterNewDeadline />
      ) : (
        renderedTodo.deadline
      );
    };

    const todoItem = (
      <li id={renderedTodo.done ? "done" : "not-done"}>
        <span>Description: </span> <Description />
        <br />
        <span>Deadline: </span> <Deadline /> .
      </li>
    );

    return todoItem;
  }
}
