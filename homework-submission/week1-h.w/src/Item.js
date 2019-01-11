import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        <h2>{this.props.text}</h2>
        <span>{this.props.deadline}</span>
      </li>
    );
  }
}

export default Item;
