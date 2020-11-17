import React from 'react'

const Joke = ({ joke }) => {
    return (
        <div>
            <p className='joke-setup'>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </div>
    )
}

export default Joke;
