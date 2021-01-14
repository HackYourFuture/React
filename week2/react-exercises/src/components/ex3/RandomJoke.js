import React, { useState, useEffect } from 'react';
import Joke from './Joke';
const url = 'https://official-joke-api.appspot.com/random_joke';

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getJoke = () => {
    setIsLoading(true);
    console.log('sending http request...');
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          isLoading(false);
          throw new Error('Failed to fetch..');
        }
        return res.json();
      })
      .then((data) => {
        setJoke(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div
      style={{
        borderTopStyle: 'dashed',
        borderTopColor: 'black',
        marginTop: '1rem',
      }}
    >
      {isLoading && <p>Loading...</p>}
      {hasError && <p>something went wrong</p>}
      {joke && <Joke obj={{ joke }} />}
    </div>
  );
};
export default RandomJoke;
