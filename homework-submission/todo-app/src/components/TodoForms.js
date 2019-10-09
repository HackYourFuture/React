import React from 'react';
import useInputState from '../hooks/useInputState';
import './TodoForms.css';

import uuid from 'uuid/v4';

const TodoForms = props => {
  // custom hooks for inputs
  const [description, handleDescription, resetDescription] = useInputState('');
  const [deadline, handleDeadline, resetDeadline] = useInputState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo({ id: uuid(), description, deadline, done: false });
    resetDescription();
    resetDeadline();
  };

  return (
    <form className="TodoForms" onSubmit={handleSubmit}>
      <input
        className="TodoForms-Todo"
        type="text"
        value={description}
        onChange={handleDescription}
        placeholder={'Add a new todo...'}
      />
      <input type="date" value={deadline} onChange={handleDeadline} />
      <button className="TodoForms-button"> + </button>
    </form>
  );
};

export default TodoForms;
