import React from "react";
import CheckBox from "./CheckBox";
import Moment from "react-moment";
import UpdateTodo from "./UpdateTodo";

class Todo extends React.Component {
  render() {
    const { todo, handleOnCheck, handleOnDelete, OnUpdate } = this.props;

    const todoStyle = todo.done
      ? {
          textDecoration: "line-through"
        }
      : {
          textDecoration: "none"
        };

    return (
      <li className="todo_item" style={todoStyle}>
        <UpdateTodo OnUpdate={OnUpdate} todo={todo} />
        Description <span className="todo_desc">{todo.description}</span>
        Deadline{" "}
        <span className="todo_deadline">
          <Moment format="MMM Do YY">{todo.deadline}</Moment>
        </span>
        <CheckBox
          handleOnCheck={handleOnCheck}
          todo={todo}
          handleOnDelete={handleOnDelete}
        />
      </li>
    );
  }
}
export default Todo;
