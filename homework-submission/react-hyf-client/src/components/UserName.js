import React from 'react';
import './UserName.css';

const UserName = props => {
  return <h4 className="UserName card-title font-weight-bold my-1">{props.info}</h4>;
};

export default UserName;
