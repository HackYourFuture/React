import React from "react";
import "./todosStyle.css";

export default function TodoInput({ value, onHandleInputChange }) {
  return (
    <input
      className="itemInput"
      type="text"
      placeholder="Please add your item"
      value={value}
      onChange={onHandleInputChange}
    />
  );
}
