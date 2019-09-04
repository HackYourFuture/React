import React from 'react';
import Icon from './Icon';
import { StyledInput, StyledButton } from '../styled';

export const TaskAddForm = ({ onAdd }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;

    onAdd(description, deadline);
  };

  // Source: https://css-tricks.com/prefilling-date-input/
  const today = new Date().toISOString().substr(0, 10);

  return (
    <form name='form' onSubmit={handleSubmit}>
      <StyledInput name='description' type='text' placeholder='Description' />
      <StyledInput
        name='deadline'
        type='text'
        placeholder='Deadline'
        onFocus={e => (e.target.value = today)}
      />
      <StyledButton full theme='primary'>
        <Icon>add</Icon>
      </StyledButton>
    </form>
  );
};

export default TaskAddForm;
