import React from 'react'
// import Friend from './Friend'

function Button(props) {
    
    return (
        <div className="Get_Friend">
            <button onClick={props.getStart} >Get a friend</button>
        </div>
    )
}

export default Button