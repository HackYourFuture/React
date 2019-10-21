import React from "react";
import "./style.css";

export default function UserInfo({ name, surname, phone, email }) {
  return (
    <ul className="user-info-list">
      <li>
        {name} - {surname}
      </li>
      <li>{phone}</li>
      <li>{email}</li>
    </ul>
  );
}
