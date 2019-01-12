import React, { Component } from "react";

export default class RenderTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.todo.id,
      description: this.props.todo.description,
      deadline: this.props.todo.deadline,
      done: this.props.todo.done
    };
  }
  markAs() {
    this.props.markAs(this.state);
    this.state.done ? this.setState({ done: false }) : this.setState({ done: true });
  }
  onEdit() { this.props.editMode(this.state) }

  onRemove() { this.props.removeItem(this.state) }

  render() {
    return (
      <ul>
        <li style={{ textDecoration: this.state.done ? "line-through" : "" }}>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.done}
            onChange={this.markAs.bind(this)} />
          <span>{this.state.description}</span>
          <span>{this.state.deadline}</span>
          <input type="button" value="Edit" name="edit" onClick={this.onEdit.bind(this)} />
          <input type="button" value="Remove" name="remove" onClick={this.onRemove.bind(this)} />
        </li>
      </ul >
    );
  }
}



