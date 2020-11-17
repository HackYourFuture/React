import React, {useState} from 'react';

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
      const {gender, name, location, email, phone} = friend;
      return(
      <div className="friendDiv">
       {loading && <p>is loading...</p>}
       {error && <p>There is an Error</p>}
       {!error && 
       <div>
          {Object.keys(friend).length !== 0 && (
             <ul className="Friendlist">
             <li key ={"2000"}> {gender}</li>
             <li key = {"2001"}> {name.first} {name.last}</li> 
             <li key = {"2002"}> {friend.location.street.number} {friend.location.street.name} </li> 
             <li key = {"2003"}>{friend.location.city} </li> 
             <li key = {"2004"}> {friend.location.country}</li> 
             <li key = {"2005"}> {email}</li>
             <li key = {"2006"}>{phone} </li>  
            </ul> 
          )}
        </div>
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


  



