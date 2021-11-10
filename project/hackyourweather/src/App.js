import "./App.css";
import React, { useState } from "react";
import Search from "./components/Search";
import APIKEY from "./secret";
import City from "./components/City";
import Header from "./components/Header";
//;
function App() {
  const [data, setData] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchButton = (e) => {
    e.preventDefault();
    setIsSearch(e.target.value);
  };
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${isSearch}&appid=${APIKEY}`;
  const fetchData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isSearch) {
        const request = await fetch(baseUrl);
        if (request.status > 400) {
          setError(request.message);
          throw new Error(
            `I don't know any city with this name: "${isSearch}".`
          );
        } else {
          const apiData = await request.json();
          setData([apiData]);
          return apiData;
        }
      }
    } catch (err) {
      setData([]);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Header className="Header" title="Weather" />
      <Search
        setIsSearch={handleSearchButton}
        isSearch={isSearch}
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
