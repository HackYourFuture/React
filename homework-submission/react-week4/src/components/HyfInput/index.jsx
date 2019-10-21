import React from "react";
import "./style.css";

export default function HyfInput({ value, onHandleInputChange }) {
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
