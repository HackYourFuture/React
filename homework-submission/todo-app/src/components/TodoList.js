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
        <h2>{this.props.listName}</h2>
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
