import React, { useState, useEffect } from 'react';

const DisplayUser = () => {
  const [Loding, setLoding] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const clickHandel = () => setLoding(true);
  console.log(Loding);

  const getUser = async () => {
    try {
      const dataPromis = await fetch('https://uinames.com/api/?ext');
      const dataUser = await dataPromis.json();
      setUserInfo(dataUser);
      setLoding(false);
    } catch (error) {
      console.log(error);
    }
    return function cleanup() {
      console.log('clean');
    };
  };

  useEffect(() => {
    getUser();
  }, [Loding]);
  return Loding ? (
    <p>'Loding'</p>
  ) : (
    <div>
      <h3>Display user</h3>
      <img src={userInfo.photo} alt="User" />
      <br />
      <button onClick={clickHandel}>click me</button>
      <ul>
        <li>Name: {userInfo.name}</li>
        <li>Region: {userInfo.region}</li>
        <li>Gender: {userInfo.gender}</li>
        <li>Age: {userInfo.age}</li>
        <li>Email: {userInfo.email}</li>
      </ul>
    </div>
  );
};

export default DisplayUser;
