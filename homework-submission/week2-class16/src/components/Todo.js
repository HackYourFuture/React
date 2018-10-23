import React from "react";
import CheckBox from "./CheckBox";

class Todo extends React.Component {
  render() {
    const { description, deadline, onCheck, done, id } = this.props;

    const todoStyle = done
      ? {
          textDecoration: "line-through"
        }
      : {
          textDecoration: "none"
        };

    return (
      <li className="todo_item" style={todoStyle}>
        <CheckBox onCheck={onCheck} id={id} done={done} />
        Description <span className="todo_desc">{description}</span>
        Deadline <span className="todo_deadline">{deadline}</span>
      </li>
    );
  }
}
export default Todo;
