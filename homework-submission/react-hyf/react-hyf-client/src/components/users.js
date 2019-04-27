import React from 'react';
import './users.css';

const Avatar = ({ name, url }) => <img className="avatar" alt={name} src={url} />;
const Field = ({ field, value }) => {
  return (
    <li>
      <span className="field">{field}:</span>
      <span>{value}</span>
    </li>
  );
};

const Users = ({ data, error }) => {
  return (
    <aside>
      <h2>Online Users</h2>
      {error ? (
        <p className="error"> Error: Oops! {error}</p>
      ) : (
        <div className="users">
          {data.map((user, index) => (
            <div key={index}>
              <Avatar
                name={user.name}
                url={'https://uinames.com/api/photos/'.concat(user.gender, '/', index + 1, '.jpg')}
              />
              <ul>
                {Object.keys(user).map(key => (
                  <Field key={key} field={key} value={user[key]} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default Users;
