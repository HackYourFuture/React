import React from 'react';
import Button from './Button';

const UserInput = ({ addItem }) => {
  return (
    <form onSubmit={addItem}>
      <input type="text" placeholder="Insert description" />
      <input type="date"/>
      <Button text="Add" />
    </form>
  );
};

export default UserInput;