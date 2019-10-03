import React from 'react';
import ListBody from '../listBody';
import ListHeader from '../listHeader';

// List component includes ListHeader and ListBody Components.
const List = ({ listName, items }) => {
  return (
    <div className="DynamicList">
      <ListHeader listName={listName} />
      <ListBody items={items} />
    </div>
  );
};

export default List;
