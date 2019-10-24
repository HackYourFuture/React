import React from 'react';
import { NavLink } from 'react-router-dom';

function Assignments() {
  const homeworks = [
    {
      name: 'Week 1',
      id: 'week-1',
      description: 'A static todo list',
    },
    {
      name: 'Week 2',
      id: 'week-2',
      description: 'A dynamic todo list',
    },
    {
      name: 'Week 3',
      id: 'week-3',
      description: 'A random user selector',
    },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Assignments</h1>
        <ul className="list-group">
          {homeworks.map(({ name, id, description }) => {
            return (
              <li key={id} className="list-group-item">
                <NavLink to={`/assignments/${id}`}>
                  {name}: {description}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Assignments;
