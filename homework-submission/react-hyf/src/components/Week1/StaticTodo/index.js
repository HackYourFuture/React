import React from 'react';
import TodoItem from '../TodoItem';

const StaticTodo = ({ todo }) => {
  return (
    <ul className="list-group">
      <TodoItem todo={{ description: 'Get out of bed', deadline: 'Wed Sep 13 2017' }} />
      <TodoItem todo={{ description: 'Brush teeth', deadline: 'Thu Sep 14 2017' }} />
      <TodoItem todo={{ description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }} />
    </ul>
  );
};

export default StaticTodo;
