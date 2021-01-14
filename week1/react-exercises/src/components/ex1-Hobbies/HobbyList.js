import React from 'react';
import Hobbies from './Hobbies';
import { v4 as uuidv4 } from 'uuid';

const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

const hobbyList = () => {
  const list = hobbies.map((hobby) => <Hobbies hobby={hobby} key={uuidv4()} />);

  return (
    <div className="list">
      <h1>Hobbies</h1>
      <ul>{list}</ul>
    </div>
  );
};

export default hobbyList;
