import React from 'react';

const ListItem = ({ description, deadline }) => {
  return (
    <li>
      {description}
      {deadline}
    </li>
  );
};

export default ListItem;
