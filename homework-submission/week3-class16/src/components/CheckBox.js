import React, { Component } from "react";

class CheckBox extends Component {
  render() {
    const { handleOnCheck, handleOnDelete, todo } = this.props;

    return (
      <div className="function-container">
        <label className="check_box">
          <input
            type="checkbox"
            onClick={() => handleOnCheck(todo.id)}
            id={todo.id}
            defaultChecked={todo.done}
          />
          set as done
        </label>

        <button
          className="btn btn-danger btn-bg m-2"
          onClick={() => handleOnDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default CheckBox;
