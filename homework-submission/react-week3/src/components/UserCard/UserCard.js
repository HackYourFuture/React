import React from "react";
import "./userCard.css";

export default function UserCard({ image, image_info, button, children }) {
  return (
    <React.Fragment>
      <img src={image} alt={image_info} />
      {children}
      {button}
    </React.Fragment>
  );
}
