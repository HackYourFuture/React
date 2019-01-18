import React, { Component } from 'react';
import CheckBox from './CheckBox'

class Todo extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <li className={todo.done && 'done'}>
        <CheckBox todo={todo} handler={() => this.props.handler(todo.id)} />
        {todo.description} , {todo.deadline}
      </li>
    );
  }
}
export default Todo;
