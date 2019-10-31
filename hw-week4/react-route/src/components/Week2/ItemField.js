import React from 'react';

const ItemField = ({ formHandler }) => {
  return (
    <form onSubmit={formHandler}>
      <input type="text" name="itemField" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default ItemField;
