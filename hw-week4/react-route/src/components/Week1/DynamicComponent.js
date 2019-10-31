import React from 'react';
import Header from './Header';
import Todo from './Todo';
import './DynamicComponent.css';

// This component renders dynamic todo list
const DynamicComponent = ({ items }) => {
  return (
    <div className="class-div">
      <Header name="Dynamic List" />
      <ul>
        {items.map(elem => (
          <Todo
            key={elem.id}
            description={elem.description}
            deadline={elem.deadline}
            done={elem.done}
          />
        ))}
      </ul>
    </div>
  );
};

export default DynamicComponent;
