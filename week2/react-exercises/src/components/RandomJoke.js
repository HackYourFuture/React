import React, { useState, useEffect } from 'react';

function RandomJoke(url) {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);

  async function getJoke() {
    const response = await fetch(url);
    const json = await response.json();
    const arrayJson = new Array(json);
    setJoke(arrayJson);
    setLoading(false);
  }

  useEffect(() => {
    getJoke();
  }, []);

  return [joke, loading];
}

export default RandomJoke;
