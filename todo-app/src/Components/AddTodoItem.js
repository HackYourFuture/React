import React, { Component } from "react";

import Button from "./Button";
import InputField from "./InputField";
import "./styles/addTodoItem.css";

export default class AddTodoItem extends Component {
  state = {
    active: false,
    toBeAddedItem: "",
    toBeAddedDeadline: ""
  };

  toggleAddForm = event => {
    this.setState({
      active: !this.state.active
    });

    this.state.active && this.clearForm();
  };

  handleChangeTodoItem = newText => {
    this.setState({ toBeAddedItem: newText });
  };

  handleChangeDeadline = newDeadline => {
    this.setState({ toBeAddedDeadline: newDeadline });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  clearForm = () => {
    this.setState({
      toBeAddedItem: "",
      toBeAddedDeadline: ""
    });
  };

  handleAddTodo = () => {
    const { toBeAddedItem, toBeAddedDeadline } = this.state;
    this.props.handleAddTodo(toBeAddedItem, toBeAddedDeadline);
    this.setState({ active: false });
    this.clearForm();
  };

  showForm = () => {
    return (
      <div className="addTodoForm">
        <form onSubmit={this.handleSubmit}>
          <div className="formInputWrapper">
            <InputField
              type="text"
              placeholder="Todo item"
              className="todoInput"
              value={this.state.toBeAddedItem}
              handleChange={this.handleChangeTodoItem}
            />
            <InputField
              type="text"
              placeholder="Deadline"
              className="deadlineInput"
              value={this.state.toBeAddedDeadline}
              handleChange={this.handleChangeDeadline}
            />
          </div>
          <div className="formButtonsWrapper">
            <Button
              className="addTodoButton"
              buttonContent="Add"
              onClick={this.handleAddTodo}
              isDisabled={this.state.toBeAddedItem.trim() === ""}
            />
            <Button
              className="cancelAddButton"
              buttonContent="Cancel"
              onClick={this.toggleAddForm}
            />
          </div>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div>
        {!this.state.active && (
          <button className="toggleAddForm" onClick={this.toggleAddForm}>
            Add a todo item
          </button>
        )}
        {this.state.active && this.showForm()}
      </div>
    );
  }
}
