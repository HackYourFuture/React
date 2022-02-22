import { useEffect, useState } from "react";

const useFetch = (id) => {
  const [detail, setDetail] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/" + id);
        const data = await res.json();
        setDetail(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return { detail };
};

export default useFetch;
