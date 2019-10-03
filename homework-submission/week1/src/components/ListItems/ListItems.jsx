import React from 'react';
import './ListItems.css';

//This component only make itself useful when we need to add some list items :)

const ListItems = props => {
  const { description, deadline, done } = props;
  return (
    <li className={done ? 'isDone' : ''}>
      {description}, {deadline}
    </li>
  );
};

export default ListItems;
