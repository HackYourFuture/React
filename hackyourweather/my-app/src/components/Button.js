import React from 'react';



function Button({type, text, handleButton, onKeyPress}) {
    return <button onKeyPress={onKeyPress} type={type} onClick={handleButton}>{text}</button>
}

export default Button; 



