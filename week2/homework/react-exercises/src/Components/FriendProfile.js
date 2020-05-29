import React from 'react';

export default function FriendProfile(props) {
  const { name, location, email } = props.friend.results[0];
  const { street, city, country, postcode } = location;
  return (
    <div>
      <ul>
        <li>
          {name.title} {name.first} {name.last}
        </li>
        <li>
          Address: {street.name} {street.number}, {postcode}, {city}  {country}
        </li>
        <li>{email}</li>
        <li></li>
      </ul>
    </div>
  );
}