import React, { Component } from 'react';
import TodoItem from './components/todoitem/index';

class TodoLists extends Component {
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
        className={todos.done ? 'todo-item-done' : ''}
        description={todos.description}
        deadline={todos.deadline}
      />
    ));
  }

  render() {
    return (
      <div className="todo-lists">
        <h1>Todo Lists:</h1>

        <div className="todos-static">
          <h2>Static List:</h2>
          <ul className="TodoItemStatic">
            <TodoItem
              description="Get out of bed"
              deadline="Wed Sep 13 2017"
              className="todo-item-done"
            />
            <TodoItem
              description="Brush teeth"
              deadline="Thu Sep 14 2017"
              className="todo-item-done"
            />
            <TodoItem
              description="Eat breakfast"
              deadline="Fri Sep 15 2017"
              className="todo-item-not-done"
            />
          </ul>
        </div>

        <div className="todos-dynamic">
          <h2>Dynamic List</h2>
          <ul>{this.DynamicTodos()}</ul>
        </div>
      </div>
    );
  }
}

export default TodoLists;
