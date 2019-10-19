import React, { useState, useEffect } from 'react';

function DataFetching(source) {
  const [loading, setLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(source);
        const json = await data.json();

        if (json) {
          setLoading(false);
          setResults(json);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }

      setLoading(false);
    }

    fetchData();
  }, [source, randomNumber]);

  return {
    error,
    loading,
    results,
    setRandomNumber,
  };
}

export default DataFetching;
