import React from 'react';
import Hobby from './Hobbies';

function HobbyList(props) {
  return (
    <div className="hobbies-div">
      <header>
        <p>{props.name}</p>
      </header>
      <div className="hobbies">
        <ul>
          <Hobby hobby={props.hobby} />
        </ul>
      </div>
    </div>
  );
}

export default HobbyList;
