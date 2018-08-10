import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const todo = `description: ${this.props.description} - deadline: ${
      this.props.deadline
    }`;
    return todo;
  }
}
// can use ternary operators in after the props

// create new file called 'Item'
// Create class Item extends Component
// Return div with 1 child paragraph (text:"this is an item")
