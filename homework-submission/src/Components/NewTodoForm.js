import React from "react";
import "./newTodoForm.css";
import "@vaadin/vaadin-date-picker/vaadin-date-picker.js";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
export default class NewTodoForm extends React.Component {
  render() {
    const {
      newTodo,
      handleSubmit,
      handleNewDescription,
      handleNewDeadline
    } = this.props.TodoStore;

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
      <form className="new-todo-form" onSubmit={handleSubmit}>
        {descriptionWrapper}
        {deadlineWrapper}
        {addButton}
      </form>
    );
  }
}
