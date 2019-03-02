import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [value, setValue] = useState('');

  return (
    <div className="form">
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodo(value);
          setValue('');
        }}
      >
        <input
          className="buttons"
          type="text"
          value={value}
          required
          onChange={({ target: { value } }) => {
            setValue(value);
          }}
        />
        <button className="buttons">Add</button>
      </form>
    </div>
  );
};

export default Form;
