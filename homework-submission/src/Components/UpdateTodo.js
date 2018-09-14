import React from "react";
import "./updateTodo.css";

const EnterNewDescription = props => {
  const { handleUpdateDescription, updatedTodo } = props;
  return (
    <input
      id="enter-new-description"
      type="text"
      value={updatedTodo.description}
      onChange={e => handleUpdateDescription(e)}
      autoFocus
    />
  );
};

const EnterNewDeadline = props => {
  const { handleUpdateDeadline, updatedTodo } = props;
  return (
    <vaadin-date-picker
      id="enter-new-deadline"
      value={updatedTodo.deadline}
      onBlur={e => handleUpdateDeadline(e)}
      placeholder="Pick a date"
    />
  );
};

export { EnterNewDescription, EnterNewDeadline };
