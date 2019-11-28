import React from "react";
import "./UserFeedback.css";

const UserFeedback = props => {
  return (
    <p className={props.text === props.errorMessage ? "err-msg" : "user-msg"}>
      {props.text}
    </p>
  );
};

export default UserFeedback;
