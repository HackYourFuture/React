import React from 'react';
import Hobby from './Hoppy';

const HobbyList = (props) => {
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
          <div key={index}>
            <h3>
              <Hobby />
              {hobby}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default HobbyList;
