import React, { Component } from "react";
import "./newTodoForm.css";
import "@vaadin/vaadin-date-picker/vaadin-date-picker.js";
import { inject, observer } from "mobx-react";

@inject("TodosStore")
@observer
export default class NewTodoForm extends Component {
  render() {
    const {
      handleSubmit,
      newTodo,
      handleNewTodo,
      handleNewDescription,
      handleNewDeadline
    } = this.props.TodosStore;

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
}
