import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("TodosStore")
@observer
class Functionality extends Component {
  render() {
    const { todo } = this.props;
    const { TodosStore } = this.props;

    return (
      <div className="function-container">
        <label className="check_box">
          <input
            type="checkbox"
            onClick={() => TodosStore.handleCheck(todo._id)}
            id={todo._id}
            defaultChecked={todo.done}
          />
          Set as done
        </label>

        <button
          className="btn btn-danger btn-bg m-2"
          onClick={() => TodosStore.handleDelete(todo._id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default Functionality;
