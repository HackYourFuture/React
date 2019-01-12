import React, { Component } from 'react';

export default class EditingForm extends Component {
  constructor(props) {
    super(props);
    this.update = this.props.updateItem;
  }

  onUpdate(e) {
    e.preventDefault();
    this.update({
      id: this.props.todo.id,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: this.props.todo.done
    });
  }

  render() {
    let description = this.props.todo.description;
    let deadline = this.props.todo.deadline
    return (
      <form onSubmit={this.onUpdate.bind(this)} >
        <label htmlFor="description">description</label>
        <input type="text" name="description" id="description" defaultValue={description} />
        <label htmlFor="deadline" >Deadline</label>
        <input type="date" name="deadline" id="deadline" defaultValue={deadline} />
        <input type="submit" value="Update" />
        <input type="button" value="Cancel" onClick={this.props.cancelEditMode} />
      </form >
    );
  }
}
