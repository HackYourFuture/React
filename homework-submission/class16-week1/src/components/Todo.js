import React from "react";

class Todo extends React.Component {
  render() {
    const { description, deadline } = this.props;
    return (
      <li className="todo_item">
        <h2>
          Description{" "}
          <span className="todo_desc">
            <em>{description}</em>
          </span>
        </h2>
        <h3>
          Deadline{" "}
          <span className="todo_deadline">
            <em>{deadline}</em>
          </span>
        </h3>
      </li>
    );
  }
}
export default Todo;
