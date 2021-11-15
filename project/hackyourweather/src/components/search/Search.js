import React, { useState } from "react";
import City from "../city/City";
import "/Users/alejandrourroz/Desktop/hyf/React/project/hackyourweather/src/styles/search.css";
const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const Search = ({ setIsLoading, isLoading }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [welcome, setWelcome] = useState(false);

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKEY}`;

  const handleSearchButton = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setWelcome(true);
    try {
      const request = await fetch(baseUrl);
      if (request.status > 400) {
        setError(request.message);
        throw new Error(`I don't know any city with this name: "${search}".`);
      } else {
        const apiData = await request.json();
        setData([...data, apiData]);
        console.log(apiData);
        return apiData;
      }
    } catch (err) {
      setData([]);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Weather</h1>
        <form className="search__bar" aria-label="form" onSubmit={fetchData}>
          <input
            name="search"
            type="text"
            placeholder="City Name..."
            className="search__value"
            onChange={handleSearchButton}
          />
          <button
            disabled={!search || search === data.map((item) => item.name)}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        {welcome === false && (
          <h2>Find out the weather of your favorite cities!</h2>
        )}
        {data?.length > 0 ? (
          <City aria-label="city" data={data} />
        ) : (
          <h2>{error}</h2>
        )}
      </div>
    </div>
  );
};

export default Search;
