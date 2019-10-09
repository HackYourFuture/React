import React, { useEffect } from 'react';
import useTodoState from '../hooks/useTodoState';
import Todo from './Todo';
import TodoForms from './TodoForms';
import './TodoList.css';

const TodoList = props => {
  const defaultTodos = [
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
      descriptiondefaultTodos: 'Eat breakfast',
      deadline: '2017-09-09',
      done: false,
    },
  ];

  // using local storage to get the todos
  const userTodos = JSON.parse(window.localStorage.getItem('todos')) || defaultTodos;
  // custom hooks
  const { todos, addTodo, toggleComplete, removeTodo, updateTodo } = useTodoState(userTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="TodoList">
      <h2>{props.listName}</h2>
      <ul>
        {todos.map(todo => (
          <Todo
            todo={todo}
            key={todo.id}
            completeTodo={toggleComplete}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
      <TodoForms addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
