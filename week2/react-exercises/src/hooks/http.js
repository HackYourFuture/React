import { useState, useEffect } from 'react';

export const useHttp = (url, deps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
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
        setFetchedData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  }, deps);

  return [isLoading, fetchedData, hasError];
};
