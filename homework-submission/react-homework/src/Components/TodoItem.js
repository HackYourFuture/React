import React from 'react';

const TodoItem = ({ click, description, deadline, done }) => {
  return (
    <div className="todoItem">
      <span onClick={click} className={`todoItem-name ${done ? ' line-through' : ''}`}>
        {description}, {deadline} {done}
      </span>
    </div>
  );
};

export default TodoItem;
