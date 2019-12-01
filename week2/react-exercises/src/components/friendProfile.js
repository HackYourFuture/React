import React from 'react';

function FriendProfile(props) {
  return (
    <div className="friend-main">
      <ul className="friend-list">
        <li>
          <span>NAME:</span> {props.firstName} {props.lastName}
        </li>
        <li>
          <span>ADDRESS:</span> {props.streetName} {props.streetNumber} {props.city}{' '}
          {props.postcode}
        </li>
        <li>
          <span>COUNTRY:</span> {props.country}
        </li>
        <li>
          <span>EMAIL:</span> {props.email}
        </li>
        <li>
          <span>PHONE:</span> {props.phone}
        </li>
      </ul>
    </div>
  );
}

export default FriendProfile;
