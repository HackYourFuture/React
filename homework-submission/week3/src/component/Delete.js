import React, { Component } from "react";

class Delete extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-danger btn-sm" onClick={this.props.onDelete}>
          Remove
        </button>
      </div>
    );
  }
}
export default Delete;
