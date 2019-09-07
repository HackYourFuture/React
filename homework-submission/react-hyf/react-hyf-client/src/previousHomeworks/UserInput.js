import React from 'react';
import Button from './Button';

const UserInput = ({ addItem }) => {
  return (
    <form onSubmit={addItem}>
      <input type="text" name="description" placeholder="Insert description" />
      <input type="date" name="date" />
      <Button text="Add" />
    </form>
  );
};

export default UserInput;