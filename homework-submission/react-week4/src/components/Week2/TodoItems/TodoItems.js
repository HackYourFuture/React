import React from 'react';

const TodoItems = ({ items, deleteItemFnc, checkBoxFnc }) => {
  const ListItems = items.length ? (
    items.map((item, index) => {
      return (
        <tr key={index}>
          <td className="w2_check-column">
            <input
              type="checkbox"
              checked={item.done ? 'checked' : ''}
              id={item.id}
              onChange={() => checkBoxFnc(item.id)}
            ></input>
          </td>
          <td className={item.done ? 'w2_description w2_line_through' : 'w2_description'}>
            {item.description}
          </td>
          <td className="w2_deadline">{item.deadline}</td>
          <td className="w2_action w2_icon" onClick={() => deleteItemFnc(item.id)}>
            &times;
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="4">
        <p className="w2_no_items">No Items</p>
      </td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th className="w2_check-column ">Check</th>
          <th className="w2_description ">Description</th>
          <th className="w2_deadline ">Deadline</th>
          <th className="w2_action ">Delete</th>
        </tr>
      </thead>
      <tbody>{ListItems}</tbody>
    </table>
  );
};
export default TodoItems;
