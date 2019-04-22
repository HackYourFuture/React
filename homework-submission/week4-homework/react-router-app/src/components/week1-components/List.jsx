import React from 'react';
import ListItem from './ListItem';

const List = () => (
  <ul>
    <ListItem description="Get out of bed" deadline=", Wed Sep 13 2017 ." />
    <ListItem description=" Brush teeth" deadline=", Thu Sep 14 2017 ." />
    <ListItem description=" Eat breakfast" deadline=", Fri Sep 15 2017 ." />
  </ul>
);

export default List;
