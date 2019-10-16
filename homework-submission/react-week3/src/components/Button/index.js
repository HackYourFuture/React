import React from "react";
import "./button.css";

export default function Button({ generateNextUser }) {
  return <button onClick={generateNextUser}>Next</button>;
}
