import React from 'react';

const Todostatic = ({ todostatic }) => {
  const todoList = todostatic.map(todo => {
    return (
      <div className="collection-item-static" key={todo.id}>
        <li className={todo.id}>
          {todo.content} : {todo.deadline}
        </li>
      </div>
    );
  });

  return <div className="todos collection">{todoList}</div>;
};

export default Todostatic;
