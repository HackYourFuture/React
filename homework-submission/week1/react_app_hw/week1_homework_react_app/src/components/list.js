import React from 'react';

// ListItem component: it is to create HTML list item.
export const ListItem = props => {
  return (
    <li className={props.done ? 'line_through' : 'no_line'}>
      {props.description} , {props.deadline}.
    </li>
  );
};

// List component: it is to create HTML Unordered List:
export const List = props => {
  return <ul>{props.children}</ul>;
};
