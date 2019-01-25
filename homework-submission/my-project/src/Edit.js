import React, { Component } from 'react';

class Edit extends Component {
  onUpdate = event => {
    event.preventDefault();
    let newItem = {
      id: this.props.item.id,
      description: event.target.description.value,
      deadline: this.props.item.deadline,
      done: false,
      editing: false,
    };
    this.props.onUpdate(newItem, this.props.index);
  };
  render() {
    return (
      <div className="edit-form">
        <form onSubmit={this.onUpdate}>
          <input type="text" name="description" defaultValue={this.props.item.description} />
          <input type="submit" value="Update" />
          <input type="button" value="Cancel" onClick={this.props.handleCancel} />
        </form>
      </div>
    );
  }
}

export default Edit;
