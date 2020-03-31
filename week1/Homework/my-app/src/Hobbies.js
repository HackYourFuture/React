import React from 'react';


const Hobbies = (props) =>{
    console.log('hobbies props', props.hobby);
    const hobby =props.hobby
    return <li>{hobby}</li>
}

export default Hobbies;