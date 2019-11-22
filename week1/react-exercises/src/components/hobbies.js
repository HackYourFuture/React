import React from 'react';

function HobbyList(props) {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
    return(
        <div className="HobbyList">
            <h3 className="name">{props.name}'s Hobbies</h3>
            <ul className="hobbies">
                {hobbies.map((hobby, index) => {
                    return  <li key={index}>{hobby}</li>;
                })}
            </ul>
        </div>
    );
}

export default HobbyList;