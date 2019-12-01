import React from 'react'

function Button(props){

    return(
        <div>
            <button onClick={props.onClick}>Get a dog!</button>
        </div>
    )
}

export default Button