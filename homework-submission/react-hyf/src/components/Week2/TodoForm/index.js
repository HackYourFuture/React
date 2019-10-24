import React from 'react';

function TodoForm({ addTodo, handleChange, value, dateValue, handleDateChange }) {
  return (
    <form onSubmit={addTodo}>
      <div className="form-row">
        <div className="form-group col">
          <input
            type="text"
            placeholder="Add a todo item..."
            className="form-control"
            value={value}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group col-md-auto">
          <input
            type="date"
            className="form-control"
            value={dateValue}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="form-group-append col col-lg-2">
          <button type="submit" className="btn btn-success ">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
