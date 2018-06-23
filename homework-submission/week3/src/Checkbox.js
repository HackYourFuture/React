import React, { Component } from "react";
class Checkbox extends Component {
  render() {
    const doneStyle = {
      textDecoration: "line-through"
    };

    const unDoneStyle = {};

    const todo = this.props.todo;

    return (
      <li>
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.done}
          onChange={this.props.onChange}
        />
        <span style={todo.done ? doneStyle : unDoneStyle}>
          {todo.description} - {new Date(todo.deadline).toDateString()}
        </span>
        <input type="submit" name="Add" value="remove" />
      </li>
    );
  }
}

export default Checkbox;
