import React from 'react';


const Count = (props) =>{
   const numCount = props.count;  
   return (numCount <= 10) ? <p> {numCount} </p>: <p style={{color: "red"}}> It's higher than 10! {numCount} </p>
}

export default Count;

