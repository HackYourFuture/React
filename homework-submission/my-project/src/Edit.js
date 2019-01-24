import React, { Component } from 'react';

class Edit extends Component {
  onUpdate = event => {
    event.preventDefault();
    let newItem = {
      id: this.props.item.id,
      description: event.target.description.value,
      deadline: this.props.item.deadline,
      done: false,
    };
    this.props.onUpdate(newItem, this.props.item);
  }
  render() {
    return (
      <div className="edit-form">
        <form onSubmit={this.onUpdate}>
          <input
            className="edit-form"
            type="text"
            name="description"
            defaultValue={this.props.item.description}
          />
          <input className="edit-form" type="submit" value="Update" />
          <input
            className="edit-form"
            type="button"
            value="Cancel"
            onClick={this.props.handleCancel}
          />
        </form>
      </div>
    );
  }
}

export default Edit;
