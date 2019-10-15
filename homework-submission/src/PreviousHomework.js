import React, { useState } from 'react';
import List from './components/List';
import TodoInput from './components/TodoInput';
import todoList from './todoList';

const PreviousHomework = () => {
  const [todos, setTodos] = useState(todoList);

  const toggleDone = e => {
    const todo = todos.find(todo => todo.id === e.target.id);
    todo.done = !todo.done;
    setTodos([...todos], todo);
  };

  const toggleDelete = e => {
    const newTodos = todos.filter(todo => todo.id !== e.target.id);
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto">
      <TodoInput todos={todos} setTodos={setTodos} />
      <List todos={todos} toggleDone={toggleDone} toggleDelete={toggleDelete} />
    </div>
  );
};

export default PreviousHomework;
