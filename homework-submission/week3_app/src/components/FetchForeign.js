import React, { useState, useEffect } from 'react';

const DisplayUser = () => {
  const [loding, setLoding] = useState(true);
  const [userInfo, setUserInfo] = useState({});
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

  return loding ? (
    <p> {error ? error.message : 'Loding'}</p>
  ) : (
    <div>
      <h3> Display user </h3>
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
