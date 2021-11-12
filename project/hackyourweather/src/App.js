import "./App.css";
import React, { useState } from "react";
import Search from "./components/Search";
import City from "./components/City";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const handleSearchButton = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKEY}`;
  const fetchData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const request = await fetch(baseUrl);
      const apiData = await request.json();
      setData([apiData]);
      return apiData;
    } catch (err) {
      setData([]);
      setError(err.message);
      throw new Error(`I don't know any city with this name: "${search}".`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Header className="Header" title="Weather" />
      <Search
        setSearch={handleSearchButton}
        search={search}
        fetch={fetchData}
      />
      {isLoading && <h1>Loading...</h1>}
      {data.length > 0 ? (
        data.map((item, index) => {
          return <City data={item} key={index} />;
        })
      ) : (
        <h1 className="error__headline">{error}</h1>
      )}
    </div>
  );
}

export default App;
