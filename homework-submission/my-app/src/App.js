import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import Form from './Form';
import List from './List';

const useCustomHook = defaultValue => {
  const [variable, setValue] = useState(defaultValue);

  const updateValue = value => {
    setValue(value);
  };

  return [variable, updateValue];
};

const App = () => {
  const savedData = localStorage.getItem('todos');
  let parsedData = [];

  if (savedData) {
    parsedData = JSON.parse(savedData);
  }

  const [todos, setTodos] = useCustomHook(parsedData);

  const addTodo = text => {
    setTodos([
      ...todos,
      {
        text,
        isCompleted: false,
      },
    ]);
  };

  const completeTodo = index => {
    todos[index].isCompleted = !todos[index].isCompleted;

    setTodos([...todos]);
  };

  const removeTodo = index => {
    todos.splice(index, 1);

    setTodos([...todos]);
  };

  const saveToStorage = () => {
    localStorage.setItem('todos', JSON.stringify([...todos]));
  };

  useEffect(saveToStorage, [todos]);

  return (
    <div className="App">
      <List />
      {todos.map((todo, index) => (
        <Todo
          {...todo}
          key={index}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <Form addTodo={addTodo} />
    </div>
  );
};

export default App;
