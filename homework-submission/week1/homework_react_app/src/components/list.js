import React from 'react';

// ListItem component: it is to create HTML list item.
export const ListItem = ({ done, description, deadline }) => {
  return (
    <li className={done ? 'line_through' : 'no_line'}>
      {description} , {deadline}.
    </li>
  );
};

// List component: it is to create HTML Unordered List:
export const List = ({ children }) => {
  return <ul>{children}</ul>;
};
