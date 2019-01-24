import React, { Component } from "react";
import Edit from "./Edit";

class Item extends Component {
  state = {
    isEdited: false
  };
  handleUpdate = newItem => {
    this.props.onUpdate(newItem, this.props.index);
    this.setState({ isEdited: false });
  };
  handleEditMode = () => {
    this.setState({ isEdited: true });
  };
  handleCancel = () => {
    this.setState({ isEdited: false });
  };
  handleRemove = index => {
    this.props.handleRemove(index);
  };
  render() {
    const { index } = this.props;
    const { done, description, deadline } = this.props.todo;
    const mainItem = (
      <li>
        <input
          className="checkbox"
          type="checkbox"
          checked={done}
          onChange={() => {
            this.props.onCompleted(index);
          }}
        />
        <h3 className={done ? "done" : ""}>{description}</h3>
        <h5 className={done ? "done" : ""}>{deadline}</h5>
        <input
          type="button"
          name="edit"
          value="edit"
          className="button"
          onClick={this.handleEditMode}
        />
        <input
          type="button"
          name="remove"
          value="remove"
          className="button"
          onClick={() => this.props.onRemove(index)}
        />
      </li>
    );
    const editItemForm = (
      <Edit
        todo={this.props.todo}
        onCancel={this.handleCancel}
        onUpdate={this.handleUpdate}
      />
    );

    return this.state.isEdited ? editItemForm : mainItem;
  }
}

export default Item;
