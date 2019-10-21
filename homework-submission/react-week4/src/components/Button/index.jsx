import React from "react";
import "./button.css";

export default function Button({ onHandleClick, buttonText }) {
  return (
    <button
      className={buttonText === "Add" ? "add-btn" : ""}
      onClick={onHandleClick}
    >
      {buttonText}
    </button>
  );
}
