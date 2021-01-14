import React from 'react';

const FriendProfile = ({ friendObj }) => {
  const { name, location, email, phone } = friendObj;
  const { first, last } = name;
  const { city, street, country } = location;

  return (
    <div>
      <ul>
        <li>
          {first} {last}
        </li>
        <li>
          <span>
            {street.name}
            {street.number}
          </span>
          <p>{city}</p>

          <p>{country}</p>
        </li>
        <li>
          {email} {phone}
        </li>
      </ul>
    </div>
  );
};
export default FriendProfile;
