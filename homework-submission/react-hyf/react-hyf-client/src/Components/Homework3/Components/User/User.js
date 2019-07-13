import React from 'react';
import './User.css';

const User = ({ name, surname, gender, region, className }) => {
  return (
    <li className={className}>
      <span className="name">
        {name} {surname}
      </span>
      <span className="gender">{gender}</span>
      <span className="region">{region}</span>
    </li>
  );
};

export default User;
