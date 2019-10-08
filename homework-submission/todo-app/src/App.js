import React, { useState } from 'react';
import { todoList } from './services/todoContents';
import { initialState } from './services/todoContents';
import Todo from './components/todo';
import './App.css';
import Input from './components/input';

function App() {
  const [todoListState, setTodoListState] = useState(todoList);
  const [descAndDate, setDescAndDate] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleDone = id => {
    const todoIndex = todoListState.findIndex(todo => todo.id === id);
    const todo = todoListState[todoIndex];
    todo.done = !todo.done;
    todoListState[todoIndex] = todo;
    setTodoListState([...todoListState]);
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
    <div className="App">
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
        <Input type="submit" value="+" />
      </form>
    </div>
  );
}

export default App;
