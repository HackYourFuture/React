import React, { useState, useEffect } from 'react';

const DisplayUser = () => {
  const [loding, setLoding] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);

  const clickHandel = () => {
    setLoding(true);
  };

  const getUser = async () => {
    try {
      if (loding) {
        const dataPromis = await fetch('https://uinames.com/api/?ext');
        const dataUser = await dataPromis.json();
        setUserInfo(dataUser);
        setLoding(false);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [loding]);

  return loding && !userInfo ? (
    <div className={error ? 'on_screen warning' : 'none'}>
      {error ? `Error: ${error.message}. server is busy, Try later` : 'Loding...................'}
    </div>
  ) : (
    <div>
      <div className={error ? 'on_screen warning' : 'none'}>
        {error ? `Error: ${error.message}` : 'No Error'}
        <br />
        Can not get info for new user. Try later.
      </div>
      <h3 className={!error ? 'on_screen' : 'none'}>
        {loding ? 'Loding new info' : 'Display user info'}
      </h3>
      <p>(Fetch from remote server)</p>
      <img src={userInfo.photo} alt="User" />
      <br />

      <ul>
        <li>Name: {userInfo.name}</li>
        <li>Region: {userInfo.region}</li>
        <li>Gender: {userInfo.gender}</li>
        <li>Age: {userInfo.age}</li>
        <li>Email: {userInfo.email}</li>
      </ul>
      <button onClick={clickHandel}>Get another user</button>
    </div>
  );
};

export default DisplayUser;
