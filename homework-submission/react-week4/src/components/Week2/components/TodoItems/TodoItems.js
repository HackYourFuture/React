import React from 'react';

const TodoItems = ({ items, deleteItemFnc, checkBoxFnc }) => {
  const ListItems = items.length ? (
    items.map((item, index) => {
      return (
        <tr key={index}>
          <td className="check-column">
            <input
              type="checkbox"
              checked={item.done ? 'checked' : ''}
              id={item.id}
              onChange={() => checkBoxFnc(item.id)}
            ></input>
          </td>
          <td className={item.done ? 'description line_through' : 'description'}>
            {item.description}
          </td>
          <td className="deadline">{item.deadline}</td>
          <td className="action icon" onClick={() => deleteItemFnc(item.id)}>
            &times;
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="4">
        <p className="no_items">No Items</p>
      </td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th className="check-column ">Check</th>
          <th className="description ">Description</th>
          <th className="deadline ">Deadline</th>
          <th className="action ">Delete</th>
        </tr>
      </thead>
      <tbody>{ListItems}</tbody>
    </table>
  );
};
export default TodoItems;
