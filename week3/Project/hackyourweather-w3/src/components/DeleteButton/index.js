import React from "react";

const DeleteButton = ({ deleteItem }) => {
  return <button onClick={deleteItem}>X</button>;
};
export default DeleteButton;
