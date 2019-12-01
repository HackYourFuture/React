import React from 'react'

function Joke({ setup, punchline }) {
    return (
        <div className="Joke">
            <p className="setup">{setup}</p>
            <p className="punchline">{punchline}</p>
        </div>
    )
}

export default Joke