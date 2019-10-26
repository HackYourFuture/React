import React, { useState } from 'react';
import TodoTable from '../TodoTable';
import TodoForm from '../TodoForm';

const uuidv4 = require('uuid/v4');

function RenderTodos() {
  const [todos, setTodos] = useState([
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
  ]);

  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [complete, setComplete] = useState(false);

  const handleChange = event => {
    const descTodo = event.target.value;
    setDescription(descTodo);
  };

  const handleDateChange = event => {
    const dateTodo = event.target.value;
    setDate(dateTodo);
  };

  const addTodo = event => {
    event.preventDefault();
    const todoToAdd = {
      id: uuidv4(),
      description: description,
      deadline: date,
      done: false,
    };
    if (description === '') {
      setTodos(todos);
    } else {
      const newTodos = [...todos, todoToAdd];
      setTodos(newTodos);
    }
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const markTodo = (id, done) => {
    const todoToMark = todos.find(todo => todo.id === id);
    setComplete({ data: (todoToMark.done = !done) });
  };

  return (
    <div className="container dynamic-list">
      <h1>Todos</h1>
      <div className="Todo-Form container">
        <TodoForm
          addTodo={addTodo}
          value={todos.value}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
        />
      </div>
      <div className="Todo-List container">
        <TodoTable todos={todos} deleteTodo={deleteTodo} markTodo={markTodo} />
      </div>
    </div>
  );
}

export default RenderTodos;
