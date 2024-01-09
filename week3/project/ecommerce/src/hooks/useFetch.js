import { useState, useEffect } from "react";

export const useFetch = (apiConfig) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { url, category, noFavItems } = apiConfig;
  //console.log(category);

  useEffect(() => {
    setLoading(true);
    const apiUrl = category ? `${url}/category/${category}` : url;

    async function fetchData() {
      setError(null);
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error("Can not fetch Data!");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
    //console.log("run");
    if (noFavItems) {
      setLoading(false);
      return;
    }
    fetchData();
  }, [url, category, noFavItems]);

  return { data, loading, error };
};
