import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList listName="My Todo List" />
    </div>
  );
}

export default App;

// This is the top level component...
