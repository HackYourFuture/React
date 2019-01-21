import React, { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);
  }
  onUpdate(event) {
    event.preventDefault();
    let newItem = {
      id: this.props.item.id,
      description: event.target.description.value,
      deadline: this.props.item.deadline,
      done: false,
    };
    this.props.onUpdate(newItem);
  }
  render() {
    return (
      <form onSubmit={this.onUpdate}>
        <input type="text" name="description" defaultValue={this.props.item.description} />
        <input type="submit" value="Update" />
        <input type="button" value="Cancel" />
      </form>
    );
  }
}

export default Edit;
