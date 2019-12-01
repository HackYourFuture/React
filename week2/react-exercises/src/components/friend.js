import React, { useState, useEffect } from 'react';
import Button from '../components/button';
import FriendProfile from './friendProfile';

function Friend() {
  const [friend, setFriend] = useState({});
  const [loading, setLoading] = useState(true);

  async function getFriend() {
    const response = await fetch('https://www.randomuser.me/api?results=1');
    const json = await response.json();
    const targetArray = json.results[0];

    setFriend(targetArray);
    setLoading(false);
  }

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <div>
      <Button clickHere={() => getFriend()} buttonText="Get a friend" />
      {loading === false && (
        <FriendProfile
          firstName={friend.name.first}
          lastName={friend.name.last}
          streetName={friend.location.street.name}
          streetNumber={friend.location.street.number}
          city={friend.location.city}
          postcode={friend.location.postcode}
          country={friend.location.country}
          email={friend.email}
          phone={friend.phone}
        />
      )}
    </div>
  );
}

export default Friend;
