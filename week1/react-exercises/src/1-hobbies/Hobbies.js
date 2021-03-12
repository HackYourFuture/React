import React from "react";

const Hobbies = props => {
  return <li>{props.hobby_}</li>;
};

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
      {hobbies.map(hobby => (
        <Hobbies hobby_={hobby} />
      ))}
    </div>
  );
};

export default HobbyList;
