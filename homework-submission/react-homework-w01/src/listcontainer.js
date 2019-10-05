import React, { Component } from 'react';
import TodoListStatic from './components/todoitem-static/index';
import TodoListDynamic from './components/todoitem-dynamic/index';

//here lies the main list container. tried to make it extendable and reusable but might have screwed up in the process...

class TodoLists extends Component {
  render() {
    return (
      <div className="todo-lists">
        <h1>Todo Lists:</h1>

        <div className="todos-static">
          <h2>Static List:</h2>
          <TodoListStatic
            description="Get out of bed"
            deadline="Wed Sep 13 2017"
            className="todo-item-done"
          />
          <TodoListStatic
            description="Brush teeth"
            deadline="Thu Sep 14 2017"
            className="todo-item-done"
          />
          <TodoListStatic
            description="Eat breakfast"
            deadline="Fri Sep 15 2017"
            className="todo-item-not-done"
          />
        </div>

        <div className="todos-dynamic">
          <h2>Dynamic List</h2>
          <TodoListDynamic />
        </div>
      </div>
    );
  }
}

export default TodoLists;
