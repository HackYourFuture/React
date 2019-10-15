import React, { useState } from 'react';
import AddTodoForm from './component/AddTodoForm';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homework2() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: 'Get out of bed',
      deadline: '2017-09-11',
      done: false,
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

  const handleComplete = id => {
    const completedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(completedTodo);
  };

  const handleDelete = id => {
    const deletedTodo = todos.filter(todo => todo.id !== id);
    setTodos(deletedTodo);
  };

  const addTodoItem = (description, deadline) => {
    const newTodo = [
      ...todos,
      {
        id: Math.random(),
        description: description,
        deadline: deadline,
        done: false,
      },
    ];
    setTodos(newTodo);
  };

  const handleClearList = () => {
    setTodos([]);
  };

  return (
    <div className="container ">
      <div className="row mt-3 ">
        <div className="col-md-8 mx-auto">
          <AddTodoForm addTodoItem={addTodoItem} />
          <h3 className="text-center text-primary font-italic font-bold mt-3">Todo List Items</h3>
          <TodoList
            todos={todos}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            handleClearList={handleClearList}
          />
        </div>
      </div>
    </div>
  );
}

export default Homework2;
