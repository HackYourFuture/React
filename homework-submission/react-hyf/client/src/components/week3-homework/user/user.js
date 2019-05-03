import React from 'react';
import './user.css';

const User = ({ data }) => {
  return (
    <div className="wrapper">
      <h1>{data.name}</h1>
      <div>
        <p>Gender: {data.gender}</p>
        <p>Region: {data.region}</p>
        <p>Username: {data.name}</p>
        <p>Surname: {data.surname}</p>
      </div>
    </div>
  );
};

export default User;
