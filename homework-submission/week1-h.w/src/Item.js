import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        <h2>{this.props.text}</h2>
        <p>{this.props.deadline}</p>
      </li>
    );
  }
}

export default Item;
