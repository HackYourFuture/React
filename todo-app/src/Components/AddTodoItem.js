import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Button from "./Button";
import InputField from "./InputField";
import "./styles/addTodoItem.css";

@inject("todoStore")
@observer
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
    this.props.todoStore.addTodoItem(toBeAddedItem, toBeAddedDeadline);
    this.setState({ active: false });
    this.clearForm();
  }; // good

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
              type="date"
              className="deadlineInput"
              handleChange={this.handleChangeDeadline}
            />
          </div>
          <div className="formButtonsWrapper">
            <Button
              className="addTodoButton"
              buttonContent="Add"
              onClick={this.handleAddTodo}
              isDisabled={
                this.state.toBeAddedItem.trim() === "" ||
                this.state.toBeAddedDeadline === ""
              }
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
