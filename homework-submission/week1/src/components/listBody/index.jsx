import React from 'react';
import ListItem from '../items';

function ListBody({ items }) {
  return (
    <ul className="listHeader">
      {items.map(item => {
        const { id, description, deadline, done } = item;
        return <ListItem id={id} description={description} deadline={deadline} done={done} />;
      })}
    </ul>
  );
}

export default ListBody;
