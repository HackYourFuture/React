import React, { Component } from "react";

class CheckBox extends Component {
  render() {
    const { onCheck, id, done } = this.props;

    return (
      <input type="checkbox" onClick={onCheck} id={id} defaultChecked={done} />
    );
  }
}
export default CheckBox;
