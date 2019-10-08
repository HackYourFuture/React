import React, { useState } from 'react';

function AddTodoForm({ addTodoItem }) {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    setDescription('');
    setDeadline('');
    if (!description) return alert('you should enter Description');
    addTodoItem(description, deadline);
  };

  return (
    <form onSubmit={handleFormSubmit} className="card bg-light px-3 form my-3 mx-auto">
      <div className="d-block my-1">
        <label>Description</label>
        <input
          className="form-control"
          placeholder="EX : Do Something"
          type="text"
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className="d-block mb-2">
        <label>DeadLine</label>
        <input
          className="form-control"
          placeholder="01/01/2020"
          type="date"
          value={deadline}
          onChange={e => {
            setDeadline(e.target.value);
          }}
        />
      </div>

      <button className="btn btn-primary btn-block mb-2">add</button>
    </form>
  );
}

export default AddTodoForm;
