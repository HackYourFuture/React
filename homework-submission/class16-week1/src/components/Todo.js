import React from "react";

class Todo extends React.Component {
  render() {
    const { description, deadline } = this.props;
    return (
      <li className="todo_item">
        {/* <h2> */}
        Description <span className="todo_desc">{description}</span>
        {/* </h2> */}
        {/* <h3> */}
        Deadline <span className="todo_deadline">{deadline}</span>
        {/* </h3> */}
      </li>
    );
  }
}
export default Todo;
