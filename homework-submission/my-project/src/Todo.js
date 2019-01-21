import React from 'react';

function Todo(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={() => props.handleChange(props.item)}
        checked={props.item.done}
      />
      <p style={{ textDecoration: props.item.done ? 'line-through' : '' }}>
        {props.item.description},
      </p>
      <p style={{ textDecoration: props.item.done ? 'line-through' : '' }}>{props.item.deadline}</p>
      <input type="button" value="Edit" onClick={() => props.onEdit(props.item)} />
      <input type="button" value="remove" onClick={() => props.onRemove(props.item)} />
    </div>
  );
}

export default Todo;
