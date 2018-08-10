import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const todo = `description: ${this.props.description} - deadline: ${
      this.props.deadline
    }`;
    return todo;
  }
}
