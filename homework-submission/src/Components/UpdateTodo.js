import React from "react";
import "./updateTodo.css";

const EnterNewDescription = props => {
  const { handleUpdateDescription, actions } = props;
  return (
    <input
      id="enter-new-description"
      type="text"
      value={actions.updatedTodo.description}
      onChange={e => handleUpdateDescription(e)}
      autoFocus
    />
  );
};

const EnterNewDeadline = props => {
  const { handleUpdateDeadline, actions } = props;
  return (
    <vaadin-date-picker
      id="enter-new-deadline"
      value={actions.updatedTodo.deadline}
      onBlur={e => handleUpdateDeadline(e)}
      placeholder="Pick a date"
    />
  );
};

export { EnterNewDescription, EnterNewDeadline };
