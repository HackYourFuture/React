import React from 'react';
import './UserList.css';
import User from '../User/User';

const UserList = ({ users }) => {
  const usersList = users ? (
    users.map(({ name, surname, gender, region }) => (
      <User
        key={(name, surname)}
        name={name}
        surname={surname}
        gender={gender}
        region={region}
        className="user"
      />
    ))
  ) : (
    <li className="user">
      <h1>Loading...</h1>
    </li>
  );
  return (
    <ul className="users-list">
      <li>
        <span className="name title">Name</span>
        <span className="gender title">Gender</span>
        <span className="region title">Region</span>
      </li>
      {usersList}
    </ul>
  );
};

export default UserList;
