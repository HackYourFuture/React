import React from "react";
import "./DeleteButton.css";

const DeleteButton = ({ deleteItem }) => {
  return (
    <button onClick={deleteItem} className="delete-button">
      X
    </button>
  );
};
export default DeleteButton;
