import React, { useState } from 'react';

const TodoInput = ({ todos, setTodos }) => {
  //Generate random id for todos
  const generateID = () =>
    Math.random()
      .toString(16)
      .slice(-5);

  //Set default deadline to tomorrow
  const setDeadline = () => {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    return `${tomorrow.getFullYear()}-${tomorrow.getMonth()}-${tomorrow.getDate()}`;
  };

  const [newTodo, setNewTodo] = useState({
    deadline: setDeadline(),
    done: false,
  });

  const handleChange = e => {
    setNewTodo({ ...newTodo, id: generateID(), description: e.target.value });
  };

  const handleKeyDown = e => {
    // Add new todo on pressing Enter key and refresh input box
    if (e.key === 'Enter') {
      setTodos([...todos, newTodo]);
      e.target.value = '';
    }
  };

  return (
    <div className="box m-4 w-2/3">
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        placeholder="Add more ..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TodoInput;
