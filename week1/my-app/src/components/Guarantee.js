import React from 'react';


const GuaranteeComponent = ({ props }) => {
    const guaranteeTitle = 'Guarantee';
    
    return(
        <div className='guarantee-card'>
            <img className='guarantee-img' src={props.img} alt={props.title} />
            <h2 className='guarantee-title'>{props.title}</h2>
            <p className='guarantee-description'>{props.description}</p>
        </div>
    );

};

export default GuaranteeComponent;