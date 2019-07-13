import React from 'react';
import './User.css';

/**
 * A function component of a `User` to be used in the list of users
 * @param {props} param0 The destructured properties `name`, `surname`, `gender`, `region`, `className`
 * @return `User` with the values of the properties
 */
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
