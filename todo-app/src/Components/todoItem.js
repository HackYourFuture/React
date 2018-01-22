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
    this.props.todoStore.handleToggleEditOnItem(this.props.data._id);
    this.setState({
      toBeUpdatedItem: this.props.data.description,
      toBeUpdatedDeadline: this.props.data.deadline
    });
  }; // good

  handleCancelEdit = () => {
    this.props.todoStore.handleToggleEditOnItem(null, true);
  }; // good

  handleUpdate = () => {
    const { toBeUpdatedItem, toBeUpdatedDeadline } = this.state;
    const id = this.props.data._id;
    this.props.todoStore.handleUpdateItem(
      id,
      toBeUpdatedItem,
      toBeUpdatedDeadline
    );
    this.handleCancelEdit();
  };

  handleRemove = () => {
    this.props.todoStore.handleRemove(this.props.data._id);
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
    const done = this.props.data.done;
    return (
      <li className="todoItem">
        <NewTodoFormToggle
          handleChangeDeadline={this.handleChangeDeadline}
          handleToggleEdit={this.handleToggleEdit}
          handleChangeItem={this.handleChangeItem}
          data={this.props.data}
          done={done}
          isEditing={this.props.todoStore.isEditing === this.props.data._id}
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
            isEditing={this.props.todoStore.isEditing === this.props.data._id}
          />
          <Button buttonContent="remove" onClick={this.handleRemove} />
        </div>
      </li>
    );
  }
}
