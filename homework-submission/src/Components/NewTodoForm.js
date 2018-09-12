import React from "react";
import "./newTodoForm.css";
import "@vaadin/vaadin-date-picker/vaadin-date-picker.js";

export default function NewTodoForm(props) {
  const {
    handleSubmit,
    newTodo,
    handleNewTodo,
    handleNewDescription,
    handleNewDeadline
  } = props;

  const descriptionWrapper = (
    <label>
      Enter description
      <input
        type="text"
        value={newTodo.description}
        onChange={e => handleNewDescription(e)}
        autoComplete="off"
        autoFocus
      />
    </label>
  );

  const deadlineWrapper = (
    <label>
      Enter deadline
      <vaadin-date-picker
        id="date-picker"
        value={newTodo.deadline}
        onBlur={e => handleNewDeadline(e)}
        placeholder="Pick a date"
      />
    </label>
  );

  const addButton = <button className="btn">Add</button>;

  return (
    <form
      className="new-todo-form"
      onChange={handleNewTodo}
      onSubmit={handleSubmit}
    >
      {descriptionWrapper}
      {deadlineWrapper}
      {addButton}
    </form>
  );
}
