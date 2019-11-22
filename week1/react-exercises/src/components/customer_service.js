import React from 'react';

function Guarantee(props){
    return (
        <div className="services">
            <img src={props.image} alt={props.alt} />
            
            <h3 className="title">{props.title}</h3>
            <p className="description">{props.description}</p>
        </div>
    );
}
export default Guarantee;