import React, { Component } from "react";
class Add extends Component {
  render() {
    return (
      <form className="add-todo" onSubmit={this.props.onAdd}>
        <input type="text" placeholder=" Description" name="description" />
        <input type="text" placeholder="Deadline" name="deadline" />
        <button className="btn btn-secondary btn-bg m-2" type="submit">
          Add new todo
        </button>
      </form>
    );
  }
}

export default Add;
