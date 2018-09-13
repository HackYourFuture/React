import React, { Component } from "react";
import "./updateTodo.css";

import { inject, observer } from "mobx-react";

@inject("TodosStore")
@observer
class EnterNewDescription extends Component {
  render() {
    const { actions, handleUpdateDescription } = this.props.TodosStore;
    return (
      <input
        id="enter-new-description"
        type="text"
        value={actions.updatedTodo.description}
        onChange={e => handleUpdateDescription(e)}
        autoFocus
      />
    );
  }
}

@inject("TodosStore")
@observer
class EnterNewDeadline extends Component {
  render() {
    const { actions, handleUpdateDeadline } = this.props.TodosStore;
    return (
      <vaadin-date-picker
        id="enter-new-deadline"
        value={actions.updatedTodo.deadline}
        onBlur={e => handleUpdateDeadline(e)}
        placeholder="Pick a date"
      />
    );
  }
}

export { EnterNewDescription, EnterNewDeadline };
