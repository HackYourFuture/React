import "./App.css";
import React, { useState } from "react";
import Search from "./components/Search";
import APIKEY from "./secret";
//import City from "./components/City";
//;
function App() {
  const [data, setData] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchButton = (e) => {
    e.preventDefault();
    setIsSearch(e.target.value);
    console.log(e.target.value);
  };
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${isSearch}&appid=${APIKEY}`;
  const fetchData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isSearch) {
        const request = await fetch(baseUrl);
        const apiData = await request.json();
        setData([...data, apiData]);
        console.log(apiData);
        return apiData;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Search
        setIsSearch={handleSearchButton}
        isSearch={isSearch}
        fetch={fetchData}
      />
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
}

export default App;
