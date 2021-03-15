import React from "react";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <div className="hobbies">
      <h1>Extreme Hobbies:</h1>
      <ul>
        {hobbies.map((hobby, i) => (
          <Hobbies key={i} hobby_={hobby} />
        ))}
      </ul>
    </div>
  );
};

const Hobbies = props => {
  return <li>{props.hobby_}</li>;
};

export default HobbyList;
