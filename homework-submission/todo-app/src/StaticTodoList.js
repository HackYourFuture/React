import React from 'react';
import Todo from './Todo';

const StaticTodoList = props => {
  return (
    <div>
      <h2>{props.listName}</h2>
      <ul>
        <Todo todo={{ description: 'Get out of bed', deadline: 'Wed Sep 13 2017' }} />
        <Todo todo={{ description: 'Brush teeth', deadline: 'Thu Sep 14 2017' }} />
        <Todo todo={{ description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }} />
      </ul>
    </div>
  );
};

export default StaticTodoList;
// StaticTodoList is the parent component of Todo.
