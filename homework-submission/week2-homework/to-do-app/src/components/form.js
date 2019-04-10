import React from 'react';

const ToDoForm = props => {
  return <form onSubmit={props.handleSubmit}>{props.children}</form>;
};

export default ToDoForm;
