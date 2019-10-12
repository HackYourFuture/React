import React, { useState } from 'react';

const TodoItem = ({ id, description, deadline, done, toggleDone, toggleDelete }) => {
  // Display delete icon when hovering component
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!hover);

  return (
    <li
      className={`flex p-4 bg-blue-100 ${done ? 'text-gray-600' : 'hover:bg-gray-200'}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <span className="mr-4">
        <i className="fas fa-check-circle cursor-pointer" id={id} onClick={toggleDone}></i>
      </span>
      <span className={`block ${done && 'line-through'}`}>{description}</span>
      <span className="italic text-xs ml-4 align-middle">{deadline}</span>
      <div className={`ml-auto ${hover ? '' : 'hidden'}`}>
        <i className="fas fa-minus-circle cursor-pointer" id={id} onClick={toggleDelete}></i>
      </div>
    </li>
  );
};

export default TodoItem;
