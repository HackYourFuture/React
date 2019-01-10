import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <p>{this.props.description}</p>
        <p>{this.props.deadlineDate}</p>
      </div>
    );
  }
}

export default TodoItem
