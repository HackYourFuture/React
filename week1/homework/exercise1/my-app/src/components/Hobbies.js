import React from 'react';

function Hobby(props) {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

  return (
    <div className="hobby">
      {hobbies.map((hobby, index) => {
        return <li key={index}>{hobby}</li>;
      })}
      <li>{props.hobby}</li>
    </div>
  );
}

export default Hobby;
