import React from "react";
import "./updateTodo.css";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class EnterNewDescription extends React.Component {
  render() {
    const { handleUpdateDescription, updatedTodo } = this.props.TodoStore;
    return (
      <input
        id="enter-new-description"
        type="text"
        value={updatedTodo.description}
        onChange={e => handleUpdateDescription(e)}
        autoFocus
      />
    );
  }
}

@inject("TodoStore")
@observer
class EnterNewDeadline extends React.Component {
  render() {
    const { handleUpdateDeadline, updatedTodo } = this.props.TodoStore;
    return (
      <vaadin-date-picker
        id="enter-new-deadline"
        value={updatedTodo.deadline}
        onBlur={e => handleUpdateDeadline(e)}
        placeholder="Pick a date"
      />
    );
  }
}

export { EnterNewDescription, EnterNewDeadline };
