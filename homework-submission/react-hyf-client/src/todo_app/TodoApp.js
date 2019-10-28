import React from 'react';
import './TodoApp.css';
import TodoList from './components/TodoList';

const TodoApp = () => {
  return (
    <div className="TodoApp">
      <h1>Todo App</h1>
      <TodoList listName="My Todo List" />
    </div>
  );
};

export default TodoApp;

// This is the top level component...
