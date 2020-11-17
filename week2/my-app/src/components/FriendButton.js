import React from "react";

function Button({ getFriend }) {
    return(
        <div className='button-container'>
            <button className='button' onClick={() => getFriend()}>Get a Friend!</button>
        </div>
    );
}

export default Button;