import React from 'react';
import Spinner from './Spinner';
import './User.css';
const User = props => {
  const { data, randomUser, isLoading } = props;

  return (
    <ul className="user">
      {data.length <= 0 || isLoading ? (
        <Spinner />
      ) : (
        randomUser.map(user => (
          <React.Fragment key={user.name}>
            <li>
              <img src={user.photo} alt={user.name}></img>
            </li>
            <li className="name">
              {user.name} {user.surname}
            </li>
            <li className="left_align">
              <i className="fas icon fa-venus-mars"></i>
              {user.gender}
            </li>
            <li className="left_align" data-title="region">
              <i className="fas  icon fa-globe-europe"></i>
              {user.region}
            </li>
            <li className="left_align">
              <i className="fas icon fa-phone-square-alt"></i>
              {user.phone}
            </li>
            <li className="left_align">
              <i className="fas icon fa-birthday-cake"></i>
              {user.birthday.mdy}
            </li>
            <li className="left_align">
              <i className="fas icon fa-envelope-open-text"></i>
              {user.email}
            </li>
            <li className="left_align">
              <i className="fas icon fa-key"></i>
              {user.password}
            </li>
          </React.Fragment>
        ))
      )}
    </ul>
  );
};

export default User;
