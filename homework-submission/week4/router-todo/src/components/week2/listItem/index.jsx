import React from 'react';
import './index.css';

function ListItem({ id, description, deadline, handleRemoveItem }) {
  return (
    <h3 id={id} className="list" onClick={() => handleRemoveItem(description)}>
      Description : {description} Deadline : {deadline}
    </h3>
  );
}

export default ListItem;
