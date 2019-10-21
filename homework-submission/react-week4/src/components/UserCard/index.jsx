import React from "react";
import "./style.css";

export default function UserCard({ image, image_info, button, children }) {
  return (
    <div className="user-card">
      <img src={image} alt={image_info} />
      {children}
      {button}
    </div>
  );
}
