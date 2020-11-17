/*
Exercise 3: Random Joke Generator

API endpoint: https://official-joke-api.appspot.com/random_joke

Create 2 functional components: <RandomJoke> and <Joke>

Inside <RandomJoke> create a state variable called joke (with initial state {}) and state handler setJoke.

Make use of the useEffect hook to make an asynchronous API call to the API endpoint. Put the end result into the state variable using setJoke

Now pass the reassigned state variable joke to the <Joke> component
Inside the <Joke> component, display the setup and punchline attributes in 2 <p> tags

Test out your work by importing your components into the top level component, which is <App>
*/

import React, { useState, useEffect }  from 'react';
import Joke from './Joke';

const url = 'https://official-joke-api.appspot.com/random_joke';

const RandomJoke = () => {
    const [joke, setJoke] = useState({});
    const [clickMessage, setClickMessage] = useState(true); 
    const [isLoading, setLoading] = useState(false); 
    const [hasError, setError] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every 20 second!');
            setLoading(true);
            fetch(url)
            .then(res => res.json())
            .then(data => {
            console.log(data);
            setJoke(data);
            setLoading(false);
            setClickMessage(false);
        })
        .catch(error => {
            setError(true);
            setLoading(false);
        })
          }, 20000);
          return () => clearInterval(interval);
    }, [])

    return (
        <div className='joke-card'>
            <div className='joke-header'>
            <h1>Hi, Clown 🤡</h1>
            <p>A new joke every 20 seconds</p>
            </div>
            {clickMessage && <h2 className='message'>Wait for it...</h2> }
            {isLoading && <p>Loading ...</p> }
            <Joke joke={joke}/>
            {hasError && <p>Uh oh, something has gone wrong...</p>}
        </div>
    )
}

export default RandomJoke;

