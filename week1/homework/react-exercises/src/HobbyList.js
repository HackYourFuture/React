import React from 'react';
import Hobbies  from './Hobbies'

const HobbyList = function ({hobby}) {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
    return (
        <div>
            <h1>List of Hobbies</h1>
            <ul className="HobbyList">
            { hobbies.map(hobby => (<Hobbies hobby={ hobby } />))}
            </ul>
        </div>
        
        );
}

export default HobbyList;
    
   
    
    