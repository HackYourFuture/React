import React from 'react';

function FriendProfile(props) {
  return (
    <div>
      <ul className="userUl">
        <li>
          Name :
          {props.data.map(user => {
            return user.name.first;
          })}
        </li>
        <li>
          Surname :
          {props.data.map(user => {
            return user.name.last;
          })}
        </li>
        <li>
          Email :
          {props.data.map(user => {
            return user.email;
          })}
        </li>
        <li>
          Phone Number :
          {props.data.map(user => {
            return user.phone;
          })}
        </li>
      </ul>
    </div>
  );
}

export default FriendProfile;
