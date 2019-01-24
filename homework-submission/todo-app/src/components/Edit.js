import React, { Component } from "react";

class Edit extends Component {
  handleUpdate = event => {
    event.preventDefault();
    let newItem = {
      id: this.props.todo.id,
      description: event.target.description.value,
      deadline: event.target.deadline.value,
      done: false
    };
    this.props.onUpdate(newItem);
  };

  render() {
    return (
      <form className="editForm" onSubmit={this.handleUpdate}>
        <input
          type="text"
          name="description"
          className="input"
          placeholder="enter update"
          defaultValue={this.props.todo.description}
        />
        <input type="date" name="deadline" className="input" />
        <input type="submit" className="button" value="update" />
        <input
          type="button"
          className="button"
          value="cancel"
          onClick={() => this.props.onCancel()}
        />
      </form>
    );
  }
}

export default Edit;
