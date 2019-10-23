import React, { useState } from 'react';

const TodoInput = ({ todos, setTodos }) => {
  //Generate random id for todos
  const generateID = () =>
    Math.random()
      .toString(16)
      .slice(-5);

  const getToday = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  };

  const [newTodo, setNewTodo] = useState({
    done: false,
  });

  const handleTodoChange = e => {
    setNewTodo({ ...newTodo, id: generateID(), description: e.target.value });
  };

  const handleDateChange = e => {
    setNewTodo({ ...newTodo, id: generateID(), deadline: e.target.value });
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
        className="inline-block bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/3 appearance-none text-sm"
        placeholder="Add more ..."
        onChange={handleTodoChange}
        onKeyDown={handleKeyDown}
      />
      <input className="inline-block bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/3 appearance-none text-sm" type="date" min={getToday()} onChange={handleDateChange}/>
    </div>
  );
};

export default TodoInput;
