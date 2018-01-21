import React, { Component, Fragment } from "react";
import moment from "moment";

import InputField from "./InputField";

export default class NewTodoFormToggle extends Component {
  handleToggleDone = () => {
    const id = this.props.data._id;
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
    const { description, deadline, _id } = this.props.data;
    const done = this.props.done;
    const inputId = `item${_id}`;
    return (
      <Fragment>
        <div className="todoDate">
          <span>{moment(deadline).format("YYYY-mm-DD hh:mm")}</span>
          <label
            htmlFor={inputId}
            className={done ? "markDone" : "markUndone"}
          />
          <input
            className="checkDone"
            type="checkbox"
            id={inputId}
            onClick={this.handleToggleDone}
          />
        </div>
        <div className="todoText">
          <p className={done ? "done" : "notDone"}>{description}</p>
        </div>
      </Fragment>
    );
  }
}
