import React from 'react';

const TodoItems = ({ items, deleteItemFnc, checkBoxFnc }) => {
  const ListItems = items.length ? (
    items.map((item, index) => {
      return (
        <div key={index}>
          <span className="check-column">
            <input
              type="checkbox"
              checked={item.done ? 'checked' : ''}
              id={item.id}
              onChange={() => checkBoxFnc(item.id)}
            ></input>
          </span>
          <span className={item.done ? 'description line_through' : 'description'}>
            {item.description}
          </span>
          <span className="deadline">{item.deadline}</span>
          <span className="action icon" onClick={() => deleteItemFnc(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>No Items</p>
  );

  return (
    <div className="ListItems">
      <div>
        <span className="check-column title">Check</span>
        <span className="description title">Description</span>
        <span className="deadline title">Deadline</span>
        <span className="action title">Delete</span>
      </div>
      {ListItems}
    </div>
  );
};
export default TodoItems;
