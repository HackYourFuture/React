import React from "react";

export default class Item extends React.Component {
  render() {
    const todo = `description: ${this.props.description} - deadline: ${
      this.props.deadline
    }`;
    return todo;
  }
}