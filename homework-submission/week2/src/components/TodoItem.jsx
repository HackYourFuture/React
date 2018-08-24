import React, { Component } from 'react';

const TodoItem = (props) => {
  const {Index, TodoItem} = props;
  return <li key={Index}>{TodoItem}</li>;
}

export default TodoItem;