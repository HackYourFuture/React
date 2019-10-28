import React from 'react';
import './UserPhoto.css';

const UserPhoto = props => {
  return <img className="UserPhoto card-img-top" src={props.photo} alt={props.name + ' photo'} />;
};

export default UserPhoto;
