import React from 'react';
import './UsersList.css';
import UsersAvatar from '../UsersAvatar/UsersAvatar';
import UsersField from '../UsersField/UsersField';

const UsersList = ({ data }) => (
  <div className="users">
    {data.map((user, index) => (
      <div key={index} className="avatar-box">
        <UsersAvatar
          name={user.name}
          url={`https://uinames.com/api/photos/${user.gender}/${index + 1}.jpg`}
        />
        <ul>
          {Object.keys(user).map(key => (
            <UsersField key={key} field={key} value={user[key]} />
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default UsersList;
