/*
Exercise 1: New friend on demand

API endpoint: https://www.randomuser.me/api?results=1

Create 3 functional components called <Friend>, <FriendProfile> and <Button>

Inside <Friend> 
    create a state variable called friend (with an initial state of {}) and state handler setFriend

    (before the return statement) also create a function called getFriend. Make an API call.
    At the end of the function reassign the friend state variable using setFriend

Inside the <Button> component, 
    create a <button> that has the text "Get a friend!" and onClick attribute
    Pass down the function getFriend to <Button>

Inside <FriendProfile> 
    create an <ul> that showcases the following attributes of the person: The first and last names, the address and country, the email address, and finally also the phone number

    Pass down the friend state variable to the <FriendProfile>
*/

import React, { useState, useEffect }  from 'react';
import FriendProfile from './FriendProfile';
import Button from './FriendButton';

const url = 'https://www.randomuser.me/api?results=1';

function Friend() {
    const [friend, setFriend] = useState({});
    const [data, setData] = useState(false);
    const [isLoading, setLoading] = useState(false); 
    const [hasError, setError] = useState(false);

  const getFriend = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setFriend(data.results[0]);
      setData(true);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    } 
  };
  
    useEffect(() => {
     getFriend();
    }, []);

  return (
    <div className='friend-container'>
      <div className='friend-card'>
        <h1 className='friend-title'>Hi, friend 👋 </h1>
        <Button getFriend={getFriend} />
        {isLoading && <p>'Loading ...'</p> }
        {data && <FriendProfile friend={friend} />}
        {hasError && <p>Uh oh, something has gone wrong...</p>}
      </div>
    </div>
  );
}

export default Friend;