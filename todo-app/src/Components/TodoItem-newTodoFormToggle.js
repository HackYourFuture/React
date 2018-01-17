import React, { Component, Fragment } from "react";

import InputField from "./InputField";

export default class NewTodoFormToggle extends Component {
  handleToggleDone = id => {
    this.props.handleToggleDone(id);
  };

  handleChangeItem = updatedItem => {
    this.props.handleChangeItem(updatedItem);
  };
  handleChangeDeadline = updatedDeadline => {
    this.props.handleChangeDeadline(updatedDeadline);
  };

  render() {
    if (this.props.isEditing) {
      return (
        <Fragment>
          <InputField
            type="text"
            className="todoDate input"
            value={this.props.toBeUpdatedDeadline}
            handleChange={this.handleChangeDeadline}
          />
          <InputField
            type="text"
            className="todoText input"
            value={this.props.toBeUpdatedItem}
            handleChange={this.handleChangeItem}
          />
        </Fragment>
      );
    }
    const { text, deadline, id } = this.props.data;
    const done = this.props.done;
    const inputId = `item${id}`;
    return (
      <Fragment>
        <div className="todoDate">
          <span>{deadline}</span>
          <label
            htmlFor={inputId}
            className={done ? "markDone" : "markUndone"}
          />
          <input
            className="checkDone"
            type="checkbox"
            id={inputId}
            onClick={() => this.handleToggleDone(this.props.data.id)}
          />
        </div>
        <div className="todoText">
          <p className={done ? "done" : "notDone"}>{text}</p>
        </div>
      </Fragment>
    );
  }
}
