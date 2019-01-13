import React from 'react';

export default function Todo(props) {
  return (
    <li style={{ textDecoration: props.todo.done ? "line-through" : "" }}>
      <input name="isGoing" type="checkbox" checked={props.todo.done}
        onChange={() => props.markAs(props.todo)} />
      {props.todo.description}, {props.todo.deadline}
    </li>
  );
}

