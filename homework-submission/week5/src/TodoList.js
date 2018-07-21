import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const doneStyle = { textDecoration: "line-through" };
    const unDoneStyle = {};
    const { deadline, description, done, id } = this.props.todoItem;

    return (
      <div>
        <input
          id={id}
          type="checkbox"
          checked={done}
          onChange={this.props.onChange}
        />
        <span style={done ? doneStyle : unDoneStyle}>
          {description} - {deadline}
        </span>
        <button onClick={() => this.props.removeTodo(id)}> Remove </button>
      </div>
    );
  }
}

export default TodoList;
