import React, {useState, useEffect} from 'react';
import Joke from './Joke';

export default function RandomJoke() {
    const [joke, setJoke] = useState(null);
    const [hasError, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchJoke = async () => {
        const apiUrl = "https://official-joke-api.appspot.com/random_joke";
        const res = await fetch(apiUrl);
        if (res.status !== 200) {
        setError("oh no we are all gonna die");
        setIsLoading(false);
        } else {
        const data = await res.json();
        setJoke(data);
        setIsLoading(false);
        }
        };
        fetchJoke();
      }, []);

    return (
        <div>            
            <h1>Your Daily Random Joke</h1>
            {isLoading && <p>Loading...</p>}
            {hasError && <p> Something went wrong! </p>} 
            {!isLoading && !hasError && <Joke joke={joke} />}
        </div>
    );
}