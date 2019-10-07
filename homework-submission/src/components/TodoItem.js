import React, { Component } from 'react';

export class TodoItem extends Component {
  render() {
    const { id, description, done } = this.props.todo;

    return (
      <div>
        <p style={{ textDecoration: done ? 'line-through' : 'none' }}>
          {description}{' '}
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
        </p>
      </div>
    );
  }
}

export default TodoItem;
