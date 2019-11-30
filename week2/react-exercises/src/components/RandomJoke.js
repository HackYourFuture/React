import React, { useState, useEffect } from 'react';

function RandomJoke() {
  const [joke, setJoke] = useState([]);

  async function getData() {
    const result = await fetch('https://official-joke-api.appspot.com/random_joke');
    const json = await result.json();
    const array = new Array(json);
    setJoke(array);
  }

  useEffect(() => {
    getData();
  }, []);
  return joke;
}

export default RandomJoke;
