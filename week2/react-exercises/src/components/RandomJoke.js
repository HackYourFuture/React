import React, {useState,useEffect} from 'react'
import Joke from './Joke'

function RandomJoke(){
    const [joke, setJoke] = useState({})
    const [error, setError] = useState(false)

    useEffect(async ()=>{
        try {
            const response= await fetch('https://official-joke-api.appspot.com/random_joke')
            const data = await response.json()
            setJoke(data)
            setError(false)
        }
        catch(error){
            console.log(error)
            setError(true)
        }
    },[])
 
    return(
        <div className="randomJoke">
            {error === false && <Joke setup={joke.setup} punchline={joke.punchline} />}
            {error === true && <h1>Data loading failed.</h1>}
        </div>
    )
}

export default RandomJoke