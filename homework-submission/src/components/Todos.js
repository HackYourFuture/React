import React, { Component } from 'react';
import TodoItem from './TodoItem';

const StaticTodos = ({ description, deadline }) => {
  return (
    <li>
      Description: {description} Deadline: {deadline}
    </li>
  );
};

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
    ));
  }
}

export { Todos, StaticTodos };
