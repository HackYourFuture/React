import React from "react";
import "@vaadin/vaadin-date-picker/vaadin-date-picker.js";

export default function NewTodoForm(props) {
  const {
    handleSubmit,
    newTodo,
    handleNewTodo,
    handleNewDescription,
    handleNewDeadline
  } = props;

  return (
    <form
      className="new-todo-form"
      onChange={handleNewTodo}
      onSubmit={handleSubmit}
    >
      <label>
        Enter description
        <input
          type="text"
          value={newTodo.description}
          onChange={e => handleNewDescription(e)}
        />
      </label>
      <label>
        Enter deadline
        <vaadin-date-picker
          id="date-picker"
          value={newTodo.deadline}
          onBlur={e => handleNewDeadline(e)}
          placeholder="Pick a date"
        />
      </label>
      <button className="btn">Add</button>
    </form>
  );
}
