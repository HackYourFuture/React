import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { todo } = this.props;
    const style =
      todo.done
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
    const todoDisplayText = `Description: ${todo.description}, Deadline: ${
      todo.deadline
    }`;

    return <li style={style}>{todoDisplayText}</li>;
  }
}
