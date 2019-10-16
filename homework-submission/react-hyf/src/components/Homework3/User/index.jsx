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
          <li>🌐 {region}</li>
          <li>🎂 {birthday}</li>
          <li>📞 {phone}</li>
          <li>✉️ {email}</li>
          <li>👤 {gender}</li>
        </ul>
      </div>
    </li>
  );
}

export default User;
