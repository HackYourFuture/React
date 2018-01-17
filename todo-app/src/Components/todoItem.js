import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import "./styles/todoItem.css";
import Button from "./Button";
import NewTodoFormToggle from "./TodoItem-newTodoFormToggle";
import EditMode from "./TodoItem-editMode";

@inject("todoStore")
@observer
export default class TodoItem extends Component {
  state = {
    toBeUpdatedItem: "",
    toBeUpdatedDeadline: ""
  };

  handleToggleEdit = () => {
    this.props.todoStore.handleToggleEditOnItem(this.props.data.id);
    this.setState({
      toBeUpdatedItem: this.props.data.text,
      toBeUpdatedDeadline: this.props.data.deadline
    });
  }; // good

  handleCancelEdit = () => {
    this.props.todoStore.handleToggleEditOnItem(null, true);
  }; // good

  handleUpdate = () => {
    const { toBeUpdatedItem, toBeUpdatedDeadline } = this.state;
    const id = this.props.data.id;
    this.props.todoStore.handleUpdateItem(
      id,
      toBeUpdatedItem,
      toBeUpdatedDeadline
    );
    this.handleCancelEdit();
  };

  handleRemove = () => {
    this.props.todoStore.handleRemove(this.props.data.id);
  }; //good

  handleChangeItem = updatedItem => {
    this.setState({ toBeUpdatedItem: updatedItem });
  }; // good

  handleChangeDeadline = updatedDeadline => {
    this.setState({ toBeUpdatedDeadline: updatedDeadline });
  }; // good

  handleToggleDone = id => {
    this.props.todoStore.handleToggleDone(id);
  };

  render() {
    console.log("item here");
    return (
      <li className="todoItem">
        <NewTodoFormToggle
          handleChangeDeadline={this.handleChangeDeadline}
          handleToggleEdit={this.handleToggleEdit}
          handleChangeItem={this.handleChangeItem}
          data={this.props.data}
          isEditing={this.props.todoStore.isEditing}
          toBeUpdatedDeadline={this.state.toBeUpdatedDeadline}
          toBeUpdatedItem={this.state.toBeUpdatedItem}
          handleToggleDone={this.handleToggleDone}
        />
        <div className="manageTodo">
          <EditMode
            toBeUpdatedItem={this.state.toBeUpdatedItem}
            toBeUpdatedDeadline={this.state.toBeUpdatedDeadline}
            handleToggleEdit={this.handleToggleEdit}
            handleUpdate={this.handleUpdate}
            handleCancelEdit={this.handleCancelEdit}
            isEditing={this.props.todoStore.isEditing}
          />
          <Button buttonContent="remove" onClick={this.handleRemove} />
        </div>
      </li>
    );
  }
}
