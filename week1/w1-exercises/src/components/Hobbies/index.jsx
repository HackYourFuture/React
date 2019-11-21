import React from "react";
import "./Hobbies.css";
const Hobbies = props => {
  return (
    <li>
      {props.hobby}
      <span>
        <button className="rm-btn" onClick={props.removeHobby}>
          X
        </button>
      </span>
    </li>
  );
};

export default Hobbies;
