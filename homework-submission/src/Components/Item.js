import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { todo } = this.props;
    const style =
      todo.done === true
        ? {
            textDecoration: "line-through wavy black",
            color: "#aaa",
            borderRightColor: "rgba(0, 153, 13, 0.568)",
            borderLeftColor: "rgba(0, 153, 13, 0.568)"
          }
        : {
            textDecoration: "none",
            color: "#eee",
            borderRightColor: "rgb(136, 16, 0)",
            borderLeftColor: "rgb(136, 16, 0)"
          };
    const todoItem = (
      <li style={style}>
        <span>Description: </span>
        {todo.description},<br />
        <span>Deadline: </span> {todo.deadline}.
      </li>
    );

    return todoItem;
  }
}
