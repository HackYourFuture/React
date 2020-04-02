import React from 'react';



const Button = ({increaseCount}) =>{
   return ( 
      <button onClick={increaseCount} >Add One! </button> )
}

export default Button;