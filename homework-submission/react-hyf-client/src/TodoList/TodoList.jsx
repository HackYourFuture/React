import React, { useState } from 'react';
import Todo from './Todo';
import Input from './input';
import uuid from 'uuid';
import { todoList } from './../services/todoContents';
import './todo.css';
const TodoList = () => {
  const initialState = {
    id: uuid.v4(),
    description: '',
    deadline: '',
    done: false,
  };

  const [todoListState, setTodoListState] = useState(todoList);
  const [descAndDate, setDescAndDate] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleDone = id => {
    const todoIndex = todoListState.findIndex(todo => todo.id === id);
    const newTodoListState = [...todoListState];
    const todo = newTodoListState[todoIndex];
    todo.done = !todo.done;
    setTodoListState(newTodoListState);
  };

  const removeHandler = id => {
    const todoList = todoListState.filter(todo => todo.id !== id);
    setTodoListState(todoList);
  };

  const handleChange = ({ target: input }) => {
    setDescAndDate({
      ...descAndDate,
      [input.name]: input.value,
    });
  };

  const validate = () => {
    if (descAndDate.description === '') {
      setErrors({ message: 'Description is required!' });
      return errors;
    }
    if (descAndDate.deadline === '') {
      setErrors({ message: 'Deadline is required!' });
      return errors;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();
    if (errors) return;
    setTodoListState([...todoListState, descAndDate]);
    setDescAndDate(initialState);
    setErrors({});
  };

  return (
    <div className="todo_container">
      <ul>
        {todoListState.map(todo => (
          <Todo key={todo.id} {...todo} handleDone={handleDone} onDelete={removeHandler} />
        ))}
      </ul>
      <form className="form" onSubmit={handleSubmit}>
        {errors.message ? <div className="alert">{errors.message}</div> : null}
        <Input
          handleChange={handleChange}
          value={descAndDate.description}
          type="text"
          name="description"
          className="descriptionInput"
        />
        <Input handleChange={handleChange} value={descAndDate.date} type="date" name="deadline" />
        <Input todoLength={todoListState.length} type="submit" value="+" />
      </form>
    </div>
  );
};

export default TodoList;
