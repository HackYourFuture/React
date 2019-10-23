import React, { useState, useEffect } from 'react';
import UserInfo from './component/UserInfo';

import './Homework3.css';

function Homework3() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);

  const genRandom = index => {
    window.addEventListener('keyup', e => {
      if (e.keyCode === 32) {
        e.preventDefault();
        setIsLoaded(false);
        const randomIndex = Math.floor(Math.random() * users.length);
        setIndex(randomIndex);
      }
    });
  };

  useEffect(() => {
    fetch('https://uinames.com/api/?ext&amount=10')
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(error => setError(true));
  }, []);

  const randomUser = users[index];

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-5 col-sm-8 mx-auto">
          {error ? (
            <h4 className="text-center text-danger">something went wrong</h4>
          ) : isLoaded ? (
            <h3
              className="text-primary text-center my-3 font-italic"
              onClick={e => genRandom(index)}
            >
              Press SpaceBar
            </h3>
          ) : (
            <UserInfo randomUser={randomUser} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Homework3;
