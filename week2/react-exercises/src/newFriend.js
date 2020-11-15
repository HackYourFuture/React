import React, {useState} from 'react';
const shortid = require('shortid');

 const Friend = () => {
   const [friend, setFriend] = useState({});
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   const getFriend  = () => {
      setLoading(true);
      return fetch('https://www.randomuser.me/api?results=1')
         .then(res => res.json())
         .then(data => setFriend(data.results[0]))
         .catch(error => setError(true))
         .finally(setLoading(false));
      }

   return (
      <>
      <Button getFriend={getFriend}/>
      <FriendProfile friend={friend} error={error} loading={loading}/>
     </>
    )
   }
    
      
   const FriendProfile = ({friend, error, loading}) => {
      return(
      <div>
       {loading && <p>is loading...</p>}
       {error && <p>There is an Error</p>}
       {!error && 
        <ul>
         <li key = {shortid.generate()}>{friend.gender}</li>
         <li key = {shortid.generate()}> {friend.name.first} {friend.name.last}</li> 
         <li key = {shortid.generate()}> {friend.location.street.number} {friend.location.street.name}</li>
         <li key = {shortid.generate()}> {friend.location.city}</li>
         <li key = {shortid.generate()}> {friend.location.country}</li>
         <li key = {shortid.generate()}> {friend.email}</li>
         <li key = {shortid.generate()}> {friend.phone}</li> 
        </ul> 
       }
     </div>
     )
   }

   const Button = ({getFriend}) => {
    return(
       <button onClick = {getFriend}>Get a friend!</button>
    )
  }

  export default Friend;


  



