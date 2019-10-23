import React from 'react';

function User({ photo, name, surname, region, birthday, phone, email, gender }) {
  return (
    <li>
      <div className="user-photo">
        <img src={photo} alt="profile pic"></img>
      </div>
      <div className="user-info">
        <ul>
          <li
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
          <li>
            <span role="img" aria-hidden="true">
              🌐
            </span>{' '}
            {region}
          </li>
          <li>
            <span role="img" aria-hidden="true">
              🎂
            </span>{' '}
            {birthday}
          </li>
          <li>
            <span role="img" aria-hidden="true">
              📞
            </span>{' '}
            {phone}
          </li>
          <li>
            <span role="img" aria-hidden="true">
              ✉️
            </span>{' '}
            {email}
          </li>
          <li>
            <span role="img" aria-hidden="true">
              👤
            </span>{' '}
            {gender}
          </li>
        </ul>
      </div>
    </li>
  );
}

export default User;
