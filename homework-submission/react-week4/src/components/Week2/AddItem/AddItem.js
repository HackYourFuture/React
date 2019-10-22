import React, { useState } from 'react';

const AddItem = ({ addItemFnc }) => {
  const [item, setItem] = useState({ id: '', description: '', deadline: '', done: false });

  const handelChange = event => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  const handelSubmit = event => {
    event.preventDefault();
    if (item.description && item.deadline) {
      addItemFnc(item);
      setItem({ id: '', description: '', deadline: '', done: false });
    } else {
      alert('You forget to write it!!');
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Enter description..."
        id="description"
        onChange={handelChange}
        value={item.description}
        required="required"
      />
      <input
        type="date"
        placeholder="dd-mm-yyyy."
        id="deadline"
        onChange={handelChange}
        value={item.deadline}
        required="required"
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddItem;
