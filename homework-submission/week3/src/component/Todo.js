import React, { Component } from "react";
import Checkbox from "./checkbox";
import Delete from "./Delete";
class Todo extends Component {
  render() {
    const { id, description, deadline, done } = this.props.todo;

    return (
      <div>
        <li className={done ? "done" : "un-done"}>
          <Checkbox todo={this.props.todo} handler={this.props.handler} /> {id}
          {":"}
          {description}
          <p>{deadline}</p>
          <Delete onDelete={this.props.onDelete} />
        </li>
      </div>
    );
  }
}
export default Todo;
