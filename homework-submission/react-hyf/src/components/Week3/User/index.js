import React from 'react';

function User({ photo, name, surname, region, birthday, phone, email, gender }) {
  return (
    <ul className="list-group">
      <li className="list-group-item disabled">
        <img src={photo} alt="profile pic"></img>
      </li>
      <li
        className="list-group-item"
        style={{
          fontSize: '20px',
          backgroundColor: 'white',
          padding: '10px',
          textAlign: 'center',
          borderRadius: '5%',
        }}
      >
        {name} {surname}
      </li>
      <li className="list-group-item">
        <span role="img" aria-hidden="true">
          🌐
        </span>{' '}
        {region}
      </li>
      <li className="list-group-item">
        <span role="img" aria-hidden="true">
          🎂
        </span>{' '}
        {birthday}
      </li>
      <li className="list-group-item">
        <span role="img" aria-hidden="true">
          📞
        </span>{' '}
        {phone}
      </li>
      <li className="list-group-item">
        <span role="img" aria-hidden="true">
          ✉️
        </span>{' '}
        {email}
      </li>
      <li className="list-group-item">
        <span role="img" aria-hidden="true">
          👤
        </span>{' '}
        {gender}
      </li>
    </ul>
  );
}

export default User;
