import React, { Fragment, useState } from 'react';
import List from '../../components/List';
import TodoInput from '../../components/TodoInput';
import Title from '../../components/Title';
import { dynamicList } from '../../todoList';

const Week2 = () => {
  const [todos, setTodos] = useState(dynamicList);

  const toggleDone = e => {
    const todo = todos.find(todo => todo.id === e.target.id);
    todo.done = !todo.done;
    setTodos([...todos], todo);
  };

  const toggleDelete = e => {
    const newTodos = todos.filter(todo => todo.id !== e.target.id);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <Title title="Dynamic List" />
      <div className="flex flex-col container mx-auto items-center">
        <TodoInput todos={todos} setTodos={setTodos} />
        <List todos={todos} toggleDone={toggleDone} toggleDelete={toggleDelete} />
      </div>
    </Fragment>
  );
};

export default Week2;
