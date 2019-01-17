import React, { Component } from "react";

class Item extends Component {
  render() {
    const { done, id, description, deadline } = this.props.todo;

    return (
      <li>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            this.props.handleChange(id);
          }}
        />
        <h2 className={done ? "done" : null}>{description}</h2>
        <p className={done ? "done" : null}>{deadline}</p>
      </li>
    );
  }
}

export default Item;
