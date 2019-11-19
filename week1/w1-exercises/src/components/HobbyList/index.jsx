import React, { useState } from "react";
import Hobbies from "../Hobbies";
import "./Hobby.css";

const HobbyList = props => {
  const [hobbies, setHobbies] = useState([
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing"
  ]);

  const [newHobby, setNewHobby] = useState("");
  const handleChange = e => {
    setNewHobby(e.target.value);
  };

  function addHobby() {
    if (newHobby.length > 3) {
      const newHobbyList = [newHobby, ...hobbies];
      setHobbies(newHobbyList);
      return newHobbyList;
    }
  }

  return (
    <React.Fragment>
      <div className="hobby-list">
        <span>
          <input
            type="text"
            placeholder="Add one of your hobbies"
            value={props.value}
            onChange={handleChange}
          />
          <button onClick={() => addHobby()}> Add </button>
        </span>
        <ul>
          {hobbies.map(hobby => (
            <Hobbies hobby={hobby} uid={hobby.substring(0, 4)} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default HobbyList;
