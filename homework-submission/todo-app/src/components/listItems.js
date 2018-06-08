import React, { Component } from "react";

class ListItems extends Component {
  render() {
    let { todoTask, taskDate } = this.props;
    return (
      <div>
        <h1>Task : {todoTask}</h1>
        <h2>{taskDate}</h2>
      </div>
    );
  }
}

export default ListItems;
