import React from "react";
import Functionality from "./Functionality";
import Moment from "react-moment";
import UpdateTodo from "./UpdateTodo";
import { observer } from "mobx-react";

@observer
class Todo extends React.Component {
  render() {
    const { todo } = this.props;

    const todoStyle = todo.done
      ? {
          textDecoration: "line-through"
        }
      : {
          textDecoration: "none"
        };

    return (
      <li className="todo_item" style={todoStyle}>
        <UpdateTodo todo={todo} />
        Description <span className="todo_desc">{todo.description}</span>
        Deadline
        <span className="todo_deadline">
          <Moment format="MMM Do YY">{todo.deadline}</Moment>
        </span>
        <Functionality todo={todo} />
      </li>
    );
  }
}
export default Todo;
