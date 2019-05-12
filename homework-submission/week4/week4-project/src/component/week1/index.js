import React, { Component } from 'react';

class Week1 extends Component {
  todos = [
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
  ];

  toggleDone = index => {
    const newTodos = this.todos.map((todo, i) => {
      if (index === i) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.todos = newTodos;
  };

  render() {
    return (
      <div className="todo-list-wrapper">
        <ul className="todo-list">
          {this.todos.map((todo, index) => {
            return (
              <li
                key={todo.deadline}
                className={todo.done ? 'done' : 'undone'}
                onClick={() => this.toggleDone(index)}
              >
                {todo.description} ==> {todo.deadline} {todo.done.toString()}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Week1;
