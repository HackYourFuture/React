import React from 'react';
import '../list/index.css';

function List({ id, description, deadline, handleRemoveItem }) {
  return (
    <h3 id={id} className="list" onClick={() => handleRemoveItem(id)}>
      Description : {description} Deadline : {deadline}
    </h3>
  );
}

export default List;
