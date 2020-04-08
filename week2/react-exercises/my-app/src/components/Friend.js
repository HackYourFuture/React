import React, { useState, useEffect } from 'react';
import FriendProfile from './FriendProfile'; 
import Button from './Button'


const url = "https://www.randomuser.me/api?results=1"; 


function Friend(){
    const [isLoading, setLoading] = useState(true);
    const [friend, setFriend] = useState({}); 
    const [error, setError] = useState(false);
    const [next, setNext]= useState(0); 

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setLoading(false)
            setFriend(data.results[0]);
          })
          .catch(err => {
            console.log("error", err);
            setError(true);
            setLoading(false);
          });
      }, [next]);

      console.log(next);
      
    return (
      <div>
        <h1>Friends for all!!</h1> 
        {error && <h1>Unable to fetch data</h1>  }
        {isLoading && <h1>loading...</h1> }
        {friend && <FriendProfile 
        firstName={friend.name? friend.name.first: 'uploading'} 
        lastName={friend.name? friend.name.last: 'uploading'}
        // address 
        state = {friend.location? friend.location.state: 'uploading'}
        city = {friend.location? friend.location.city: 'uploading'}
        street = {friend.location? friend.location.street.name: 'null'}
        houseNum = {friend.location? friend.location.street.number: 'null'}
        country ={friend.location? friend.location.country: 'uploading'}
        //contact info
        email={friend.email}
        phoneNum ={friend.phone}
        />}
     
        <Button handleButton={()=> setNext(next +1 )} text={"Get a friend!"}/>

      </div> 
    )
}


export default Friend; 