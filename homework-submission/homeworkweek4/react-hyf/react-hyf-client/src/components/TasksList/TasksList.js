import React from 'react';
import './TasksList.css';

const TasksList = ({ dynamicList, deleteTask }) => {
  return (
    <div className="task-list">
      {dynamicList.map((item, index) => (
        <div key={item.id}>
          <p
            id={item.id}
            className={item.done ? 'done' : 'not-done'}
            onClick={() => {
              const element = document.getElementById(item.id);
              element.classList.toggle('done');
            }}
          >
            <strong> Task:</strong> {item.description}, <strong>deadline :</strong> {item.deadline}
          </p>
          <button className="delete-button" onClick={() => deleteTask(index)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
