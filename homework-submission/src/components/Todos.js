import React, { Component } from 'react';
import TodoItem from './TodoItem';

const StaticTodo = ({ todo, markComplete }) => {
  return (
    <ul>
      <TodoItem
        todo={{ description: 'Get out of bed', deadline: 'Wed Sep 13 2017' }}
        markComplete={() => markComplete()}
      />
      <TodoItem
        todo={{ description: 'Brush teeth', deadline: 'Thu Sep 14 2017' }}
        markComplete={markComplete}
      />
      <TodoItem
        todo={{ description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }}
        markComplete={markComplete}
      />
    </ul>
  );
};

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <ul>
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
      </ul>
    ));
  }
}

export { Todos, StaticTodo };
