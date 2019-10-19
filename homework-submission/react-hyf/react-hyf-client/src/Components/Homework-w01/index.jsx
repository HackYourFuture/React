import React, { Component } from 'react';
import TodoItem from './components/todoitem/index';

class Week01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  DynamicTodos() {
    const { todos } = this.state;
    return todos.map(todos => (
      <TodoItem
        key={todos.id}
        className={todos.done ? 'todo-complete' : ''}
        description={todos.description}
        deadline={todos.deadline}
      />
    ));
  }

  render() {
    return (
      <div className="week01">
        <h2>Homework Week01</h2>
        <div className="todos-static">
          <h3>Static List:</h3>
          <ul className="TodoItemStatic">
            <TodoItem
              description="Get out of bed"
              deadline="Wed Sep 13 2017"
              className="todo-complete"
            />
            <TodoItem
              description="Brush teeth"
              deadline="Thu Sep 14 2017"
              className="todo-complete"
            />
            <TodoItem
              description="Eat breakfast"
              deadline="Fri Sep 15 2017"
              className="todo-incomplete"
            />
          </ul>
        </div>

        <div className="todos-dynamic">
          <h3>Dynamic List</h3>
          <ul>{this.DynamicTodos()}</ul>
        </div>
      </div>
    );
  }
}

export default Week01;
