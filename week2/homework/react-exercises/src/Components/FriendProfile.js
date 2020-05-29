import React from 'react';

export default function FriendProfile(props) {
  const { name, location, email, phone } = props.friend.results[0];
  const { street, city, state, country, postcode } = location;
  return (
    <div>
      <ul>
        <li>
          {name.title} {name.first} {name.last}
        </li>
        <li>
          Address: {street.name} {street.number} {city} {postcode} {country}
        </li>
        <li>{email}</li>
        <li></li>
      </ul>
    </div>
  );
}