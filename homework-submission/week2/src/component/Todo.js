import React, { Component } from "react";
import Checkbox from "./checkbox";

class Todo extends Component {
  render() {
    const { id, description, deadline, done } = this.props.todo;
    return (
      <li className={done ? "done" : "un-done"}>
        <Checkbox todo={this.props.todo} handler={this.props.handler} /> {id}
        {":"}
        {description}
        <p>{deadline}</p>
      </li>
    );
  }
}
export default Todo;
