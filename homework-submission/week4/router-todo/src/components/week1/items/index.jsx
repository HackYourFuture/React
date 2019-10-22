import React from 'react';
import './index.css';

const ListItem = ({ description, deadline, done }) => {
  return (
    <li className={done ? 'isDone' : ''}>
      {description} <b>Deadline :</b> {deadline}
    </li>
  );
};

export default ListItem;
