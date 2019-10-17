import React, { useState, useEffect } from 'react';
import User from '../User';
import Spinner from '../Spinner';
import CountryInput from '../CountryInput';

function UserList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(`https://uinames.com/api/?ext=photos&&query=redux`);

  const handleChange = e => {
    const value = e.target.value;
    setUrl(`https://uinames.com/api/?ext=photos&&region=${value}`);
  };

  useEffect(() => {
    document.addEventListener('keyup', function(e) {
      if (e.keyCode == 32) {
        const fetchData = async () => {
          setIsError(false);
          setIsLoading(true);

          try {
            await fetch(url)
              .then(response => response.json())
              .then(json => {
                setData(json);
                setIsLoading(false);
              });
          } catch (error) {
            setIsError(true);
          }
          console.log(url);
          setIsLoading(false);
        };
        fetchData();
      }
    });
  }, [url]);

  return (
    <div className="Users">
      <h1>User</h1>
      {isError && <div>Something went terribly wrong ...</div>}
      <CountryInput handleChange={handleChange} />
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
