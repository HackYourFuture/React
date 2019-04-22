import React from 'react';

const IntroText = ({ details, handleDone, handleDelete, crossedClassName, index }) => {
  const { description, deadline } = details;
  return (
    <div>
      <h3>ToDo: {index}</h3>
      <ul>
        <li className={crossedClassName}>Description: {description}</li>
        <li>Deadline: {deadline}</li>
      </ul>
      <button onClick={handleDone}>Done / Undone</button>
      <button onClick={handleDelete}>Delete ToDo</button>
    </div>
  );
};

export default IntroText;
