import React, { useState, useEffect } from 'react';
import ProfilPicture from '../../components/week3/ProfilPicture';
import UserInfo from '../../components/week3/UserInfo';
import './style.css';

function HomeWorkWeek3() {
  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const randomNum = Math.floor(Math.random() * 10);
  const userValues = Object.values(user);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`https://uinames.com/api/?amount=10&&ext=photos`);
      const data = await res.json();
      setUser(data[index]);
      setIsLoading(false);
    };
    getUsers();
  }, [index]);

  const handleClick = e => {
    if (e.which === 32) {
      e.preventDefault();
      // e.stopPropagation()
      setIndex(randomNum);
    } else {
      setIndex(randomNum);
      e.preventDefault();
      // e.stopPropagation()
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  });

  return (
    <div>
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="container">
          <ProfilPicture userValues={userValues} />
          <UserInfo userValues={userValues} />
          <img
            className={'imgOnSmallScreen'}
            src={'https://img.icons8.com/metro/16/000000/change-user-male.png'}
            alt={'Change User'}
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
}

export default HomeWorkWeek3;
