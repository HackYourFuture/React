import React from 'react';



function Button({text, handleButton}) {
    return <button onClick={handleButton}>{text} </button>
}

export default Button; 



