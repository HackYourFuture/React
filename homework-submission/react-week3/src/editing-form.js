import React, { Component } from "react";

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
    return (
      <form onSubmit={this.onUpdate.bind(this)} className="editing-form">
        <div>
          <label htmlFor="description">description: </label>
          <input type="text" name="description" id="description"
            defaultValue={this.props.todo.description}
          />
          <label htmlFor="deadline">Deadline: </label>
          <input type="date" name="deadline" id="deadline"
            defaultValue={this.props.todo.deadline}
          />
        </div>

        <input type="submit" value="Update" className="btn" />
        <input className="btn" type="button" value="Cancel"
          onClick={this.props.cancelEditMode}
        />
      </form>
    );
  }
}
