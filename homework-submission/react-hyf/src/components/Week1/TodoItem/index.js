import React, { Component } from 'react';

export class TodoItem extends Component {
  render() {
    const { id, description, done, deadline } = this.props.todo;

    return (
      <li
        className="list-group-item"
        style={{ textDecoration: done ? 'line-through' : 'none' }}
        key={id}
      >
        {description} {deadline}
      </li>
    );
  }
}

export default TodoItem;
