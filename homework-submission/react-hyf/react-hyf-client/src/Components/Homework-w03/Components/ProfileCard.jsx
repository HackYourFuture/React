import React from 'react';

function ProfileCard({ props }) {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className={'card'}>
      <img className="profile-pic" src={props.photo} alt="random"></img>
      <div className="info-wrapper">
        <p className="name-surname">
          {props.name} {props.surname}
        </p>
        <p>{`Gender: ${props.gender ? capitalize(props.gender) : ''}`}</p>
        <p>{`Country: ${props.region}`}</p>
        <p>{`Phone: ${props.phone}`}</p>
        <p>{`Birthday: ${props.birthday ? props.birthday.dmy : ''}`}</p>
        <p>{`E-Mail: ${props.email}`}</p>
        <p>{`Password: ${props.password}`}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
