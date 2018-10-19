import React from "react";

class Todo extends React.Component {
  render() {
    const { description, deadline } = this.props;
    return (
      <li className="todo_item">
        Description <span className="todo_desc">{description}</span>
        Deadline <span className="todo_deadline">{deadline}</span>
      </li>
    );
  }
}
export default Todo;
