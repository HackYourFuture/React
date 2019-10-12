import React from 'react';
import TodoItem from './TodoItem';

const List = ({ todos, toggleDone, toggleDelete }) => (
  <div className="box m-4 w-2/3">
    <ul className="shadow-lg rounded-lg overflow-hidden">
      {todos.map(({ id, description, deadline, done }) => (
        <TodoItem
          key={`todo-${id}`}
          id={id}
          description={description}
          deadline={deadline}
          done={done}
          toggleDone={toggleDone}
          toggleDelete={toggleDelete}
        />
      ))}
    </ul>
  </div>
);

export default List;
