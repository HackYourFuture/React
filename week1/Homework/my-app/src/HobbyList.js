import React from 'react';
import Hobbies from './Hobbies';



const HobbyList = (props)=> {
  const hobbies = props.passedHobbies; 
  return (
    <div>
       <h1> Hobby List</h1>
      <ul>
        {hobbies.map(hobby => {
          return <Hobbies hobby={hobby}/>})}
      </ul> 
    </div>
  )
}


export default HobbyList;

