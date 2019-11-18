import React, { useState } from "react";
import Hobbies from "../Hobbies";

const HobbyList = ({ children }) => {
  const [hobbies, setHobbies] = useState([
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing"
  ]);

  return (
    <ul>
      {
        (children = hobbies.map((hobby, index) => (
          <Hobbies hobby={hobby} index={index} />
        )))
      }
    </ul>
  );
};

export default HobbyList;
