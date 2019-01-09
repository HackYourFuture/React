import React from 'react';

function TodoItem(props) {
  return (
    <div>
      <p>{props.description} {props.deadlineDate}</p>
    </div>
  )
}


export default TodoItem
