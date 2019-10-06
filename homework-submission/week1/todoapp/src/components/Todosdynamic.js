import React from 'react';
const Todosdynamic = ({ todosdynamic, deleteTodo }) => {
  const todoList = todosdynamic.length ? (
    todosdynamic.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <ul
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.description}
          </ul>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left</p>
  );

  return <div className="todosdynamic collection">{todoList}</div>;
};

export default Todosdynamic;
