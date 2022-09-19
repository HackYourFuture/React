import React from 'react';
import Hobby from './Hobby';
import './HobbyList.css';

const HobbyList = () => {
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
  ];
  return (
    <div>
      {hobbies.map((hobby, index) => {
        return (
          <div className="hobby" key={index}>
            <span>
              <Hobby />
            </span>
            <h3>{hobby}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default HobbyList;
