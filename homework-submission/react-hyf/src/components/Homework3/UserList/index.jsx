import React, { useState, useEffect } from 'react';
import User from '../User';
import Spinner from '../Spinner';
import CountryInput from '../CountryInput';

function UserList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const selectInput = document.getElementById('country-selection');
    selectInput.addEventListener('change', function(e) {
      const value = e.target.value;
      document.addEventListener('keyup', function(e) {
        if (e.keyCode == 32) {
          fetch(`https://uinames.com/api/?ext=photos&&region=${value}`)
            .then(response => response.json())
            .then(json => {
              setData(json);
              setIsLoading(false);
            });
        }
      });
    });
  }, []);

  return (
    <div className="Users">
      <h1>User</h1>
      <CountryInput />
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
