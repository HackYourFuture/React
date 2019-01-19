import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <li className={todo.done && 'done'}>
        <input type="checkbox" onChange={() => this.props.handler(todo.id)} defaultChecked={todo.done} />
        {todo.description} , {todo.deadline}
      </li>
    );
  }
}
export default TodoItem;
