import React, { Component } from 'react';

export class TodoItem extends Component {
  render() {
    const { id, description, done, deadline } = this.props.todo;

    return (
      <li style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {description} {deadline}
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
      </li>
    );
  }
}

export default TodoItem;
