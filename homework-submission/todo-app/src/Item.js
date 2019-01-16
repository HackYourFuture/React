import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.done}
          onChange={() => {
            this.props.handleChange(this.props.todo.id);
          }}
        />
        <h2 className={this.props.todo.done ? "done" : null}>
          {this.props.todo.description}
        </h2>
        <p className={this.props.todo.done ? "done" : null}>
          {this.props.todo.deadline}
        </p>
      </li>
    );
  }
}

export default Item;
