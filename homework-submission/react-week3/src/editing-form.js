import React, { Component } from "react";

export default class EditingForm extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.props.onUpdate;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.onUpdate({
      index: this.props.index,
      description: e.target.description.value,
      deadline: e.target.deadline.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="editing-form">
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
          onClick={this.props.cancelEditingMode}
        />
      </form>
    );
  }
}
