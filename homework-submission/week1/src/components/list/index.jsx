import React from 'react';
import ListBody from '../listBody';
import ListHeader from '../listHeader';

function List({ listName, items }) {
  return (
    <div className="DynamicList">
      <ListHeader listName={listName} />
      <ListBody items={items} />
    </div>
  );
}

export default List;
