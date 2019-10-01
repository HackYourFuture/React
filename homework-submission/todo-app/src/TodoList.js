import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  state = {
    todos: [
      {
        id: 1,
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: 2,
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: 3,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <h2>Static List</h2>
        <ul>
          <Todo todo={{ description: 'Get out of bed', deadline: 'Wed Sep 13 2017' }} />
          <Todo todo={{ description: 'Brush teeth', deadline: 'Thu Sep 14 2017' }} />
          <Todo todo={{ description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }} />
        </ul>
        <h2>Dynamic List</h2>
        <ul>
          {this.state.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
// TodoList is the parent component of Todo.
