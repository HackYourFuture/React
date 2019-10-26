import React, { useState, useEffect } from 'react';
import User from '../User';
import Spinner from '../../Spinner';
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

  async function fetchData() {
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

    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  function useKey(key) {
    const [pressed, setPressed] = useState(false);

    const onDown = event => {
      if (event.keyCode === 32) {
        event.preventDefault();
        setPressed(true);
        fetchData();
      }
    };

    useEffect(() => {
      window.addEventListener('keydown', onDown);
      return () => {
        window.removeEventListener('keydown', onDown);
      };
    }, [key]);

    return pressed;
  }

  const space = useKey();

  return (
    <div className="Users container">
      <h1>User</h1>
      {!space && (
        <div className="alert alert-warning fade show" role="alert">
          Press spacebar to get a random user
        </div>
      )}
      {isError && <div>Something went terribly wrong ...</div>}
      <div className="container">
        <CountryInput handleChange={handleChange} handleClick={() => fetchData()} />
      </div>

      {isLoading === true ? (
        <Spinner />
      ) : (
        <div className="container">
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
