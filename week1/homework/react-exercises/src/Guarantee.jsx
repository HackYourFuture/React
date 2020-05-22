import React from 'react';

function Guarantee({img, title, description}){
    const style = {border: '1px solid yellow'}
    return (
        <div style = {style}>
            <img src={img} />
            <div>
                <strong>{ title }</strong>
                <p>{ description }</p>
            </div>
        </div>
        
    );

}

export default Guarantee;