import React from 'react';
import useInputState from '../hooks/useInputState';
import './EditForm.css';

const EditForm = props => {
  // custom hooks for inputs
  const [description, handleDescription, resetDescription] = useInputState(props.description);
  const [deadline, handleDeadline, resetDeadline] = useInputState(props.deadline);

  const handleSubmit = e => {
    e.preventDefault();
    props.updateTodo(props.id, description, deadline);
    resetDescription();
    resetDeadline();
    props.toggleEditing();
  };

  return (
    <form className="EditForm" onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={handleDescription} />
      <input type="date" value={deadline} onChange={handleDeadline} />
      <button className="EditForm-button"> + </button>
    </form>
  );
};

export default EditForm;
