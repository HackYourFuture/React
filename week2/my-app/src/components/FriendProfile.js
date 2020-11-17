import React from "react";

const FriendProfile = ({ friend }) => {
    const { picture, name, location, email, phone } = friend;
    return (
      <ul>
        <dvi className='list-container'>
          <img className='profile-pic' src={picture.large} alt={name.first} />
          <li>{name.first} {name.last}</li>
          <li>{location.street.name}, {location.street.number}</li>
          <li>{location.postcode}, {location.city}</li>
          <li>{location.country}</li>
          <li>{email}</li>
          <li>{phone}</li>
        </dvi>  
      </ul>
    );
  };
  

export default FriendProfile;