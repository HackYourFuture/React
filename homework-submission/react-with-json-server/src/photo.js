import React from 'react';

const Photo = props => {
  return (
    <div className="photo">
      <img src={props.user.photoUrl} alt="user" />
      <p>{props.user.description}</p>
    </div>
  );
}
export default Photo;