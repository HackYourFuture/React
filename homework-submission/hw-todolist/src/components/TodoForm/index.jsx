import React from 'react';

function TodoForm({ addTodo, handleChange, value, dateValue, handleDateChange }) {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add a todo task..."
        value={value}
        onChange={handleChange}
      ></input>
      <input type="date" dateValue={dateValue} onChange={handleDateChange}></input>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
