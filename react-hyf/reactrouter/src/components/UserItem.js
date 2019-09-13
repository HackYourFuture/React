import React from 'react';

const UserItem = props => {
  return (
    <div className="card">
      <div>
        <img src={props.user.photo} alt="" />
      </div>
      <h1>
        {props.user.name} {props.user.surname}
      </h1>

      <ul className="user-items">
        <li>
          <span>👤{props.user.gender}</span>
        </li>
        <li>
          <span>🌐{props.user.region}</span>
        </li>
        <li>
          <span>📞 {props.user.phone}</span>
        </li>
        <li>
          <span>🎂 {props.user.birthday.mdy}</span>
        </li>
        <li>
          <span>✉️ {props.user.email}</span>
        </li>
        <li>
          <span>🔑 {props.user.password}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserItem;
