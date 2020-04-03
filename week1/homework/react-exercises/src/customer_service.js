import React from 'react';

const Guarantee = ({img, title, description}) => {
    return (
        <div>
            <img className="img" src={img}  alt={title}/>
            <h2 className='title'>{title}</h2>
            <p className='description'>{description}</p>
        </div>
    );
};

export default Guarantee;