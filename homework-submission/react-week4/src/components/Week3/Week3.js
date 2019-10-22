import React, { useState, useEffect } from 'react';
import './Week3.css';

const Week3 = () => {
  const [loading, setLoding] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);

  const clickHandel = () => {
    setLoding(true);
  };

  const getUser = async () => {
    try {
      if (loading) {
        const dataPromis = await fetch('https://uinames.com/api/?ext');
        const dataUser = await dataPromis.json();
        setUserInfo(dataUser);
        setLoding(false);
        console.log('getuser function');
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [loading]);

  return loading && !userInfo ? (
    <div className={error ? 'w3_on_screen w3_warning' : 'w3_loading'}>
      {error ? `Error: ${error.message}. server is busy, Try later` : 'loading...................'}
    </div>
  ) : (
    <div>
      <header className="App-header">
        <div className={error ? 'w3_on_screen w3_warning' : 'w3_none '}>
          {error ? `Error: ${error.message}` : 'No Error'}
          <br />
          Can not get info for new user. Try later.
        </div>
        <h1>Week3</h1>
      </header>
      <main className="App-main">
        <h3 className={!error ? 'w3_on_screen' : 'w3_none '}>
          {loading ? (
            <span className="w3_loading">loading new info</span>
          ) : (
            <span>Display user info</span>
          )}
        </h3>
        <img src={userInfo.photo} alt="User" />

        <ul>
          <li>Name: {userInfo.name}</li>
          <li>Region: {userInfo.region}</li>
          <li>Gender: {userInfo.gender}</li>
          <li>Age: {userInfo.age}</li>
          <li>Email: {userInfo.email}</li>
        </ul>
        <button onClick={clickHandel}>Get another user</button>
      </main>
    </div>
  );
};

export default Week3;
