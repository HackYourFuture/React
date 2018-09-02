import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { todo } = this.props;
    return (
      <input
        type="Checkbox"
        onChange={this.props.handler}
        defaultChecked={todo.done}
        id={todo.id}
      />
    );
  }
}
export default Checkbox;
