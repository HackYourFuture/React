import React from 'react';
import './UsersField.css';

const UsersField = ({ field, value }) => (
  <li className="field">
    <span className="users-field">{field}:</span> {value}
  </li>
);

export default UsersField;
