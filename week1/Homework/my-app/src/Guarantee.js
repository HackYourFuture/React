import React from 'react';





const Guarantee = (props) =>{
    const filling = props.item
    const img = filling.pic; 
   return ( 
       <div>
        <img src={img} alt={filling.alt} />
        <h3> {filling.title} </h3>
        <p> {filling.description}</p>
       </div>
   )
}

export default Guarantee;