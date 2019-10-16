import React, { useState, useEffect } from 'react';
import User from '../User';
import Spinner from '../Spinner';

function UserList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://uinames.com/api/?amount=10&&ext=photos')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="Users">
      <h1>Users</h1>
      {isLoading === true ? (
        <Spinner />
      ) : (
        <ul>
          {data.map(p => {
            return (
              <User
                name={p.name}
                surname={p.surname}
                photo={p.photo}
                region={p.region}
                birthday={p.birthday.dmy}
                phone={p.phone}
                gender={p.gender}
                email={p.email}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default UserList;
