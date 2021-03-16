import React from 'react';

function Hobbies({hobbyName}) {
  return <li className="hobbyItem">{hobbyName}</li>;
}

function HobbyList() {
  const hobbies = ['Reading', 'Chess', 'Watching Movies', 'Dancing', 'Cooking'];

  return (
    <div className="hobbies_container">
      <h3>My hobbies</h3>
      <ol className="itemsList">
        {hobbies.map((hobby) => (
          <Hobbies hobbyName={hobby} key={hobby} />
        ))}
      </ol>
    </div>
  );
}

export default HobbyList;
