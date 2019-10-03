import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import StaticTodoList from './components/StaticTodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <StaticTodoList listName="My Static Todo List" />
      <TodoList listName="My Dynamic Todo List" />
    </div>
  );
}

export default App;

// This is the top level component...
