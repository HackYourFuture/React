import React, { useState, useEffect } from 'react';
import User from '../User';
import Spinner from '../Spinner';

function UserList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://uinames.com/api/?ext=photos}`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="Users">
      <h1>User</h1>
      {isLoading === true ? (
        <Spinner />
      ) : (
        <div>
          <User
            name={data.name}
            surname={data.surname}
            photo={data.photo}
            region={data.region}
            birthday={data.birthday.dmy}
            phone={data.phone}
            gender={data.gender}
            email={data.email}
          />
        </div>
      )}
    </div>
  );
}

export default UserList;
