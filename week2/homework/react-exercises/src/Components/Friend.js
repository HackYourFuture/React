import React, { useState, useEffect } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

export default function Friend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getFriend = () => {
    fetch('https://www.randomuser.me/api?results=1')
      .then(response => response.json())
      .then(data => {
        setFriend(data);
        setLoading(false);
      })
      .catch(e => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(getFriend, []);
  
  if (isLoading) return <p>is Loading ...</p>;
  if (hasError) return <h2>Error Occured ...</h2>;

  return (
    <div>
      <h1>Get New Friend</h1>
      <Button onClick={getFriend} title="friend"/>
      <FriendProfile friend={friend} />
    </div>
  );
}