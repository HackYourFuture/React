import React, { useState, useEffect } from 'react';
import FriendProfile from './FriendProfile';
import Button from './Button';

const url = 'https://www.randomuser.me/api?results=1';

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getFriend = () => {
    setIsLoading(true);
    console.log('sending http request...');
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          isLoading(false);
          throw new Error('Failed to fetch..');
        }
        return res.json();
      })
      .then((data) => {
        setFriend(data.results[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>something went wrong</p>}
      <div>{friend.name && <FriendProfile friendObj={friend} />}</div>
      <Button getFriend={getFriend} />
    </div>
  );
};
export default Friend;
