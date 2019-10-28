import React from 'react';
import './UserDataItem.css';

const UserDataItem = props => {
  //  const { gender, region, phone, email, password } = props;
  return (
    <li className="UserDataItem list-group-item d-flex justify-content-between">
      <i className={props.icon + ' mx-2 fa-2x'}></i>
      <span>{props.info}</span>
    </li>
  );
};

export default UserDataItem;
