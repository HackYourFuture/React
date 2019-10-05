import React, { useState } from 'react';
import List from './List';
import ListTitle from './ListTitle';
import { dynamicList } from '../todoLists';

const DynamicList = ({ title }) => {
  const [todos, setTodos] = useState(dynamicList);

  const toggleDone = e => {
    const todo = todos.find(todo => todo.id === +e.target.id);
    todo.done = !todo.done;
    setTodos([...todos], todo);
  };

  return (
    <div className="container mx-auto">
      <ListTitle text={title} />
      <List todos={todos} toggleDone={toggleDone} />
    </div>
  );
};

export default DynamicList;
