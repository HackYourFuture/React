import React, { useState } from 'react';
import CityWeather from './CityWeather';
import Search from './Search';
// import { CityCard } from './CityCard';

const Weather = () => {
  const [cityName, setCityName] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [search, setSearch] = useState(false);
  const [FilterSearch, setFilterSearch] = useState({});
  const Api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const handlesearch = (e, value) => {
    const url = `
    https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${Api_key}&units	=metric `;

    e.preventDefault();
    setHasError(false);
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
        if (value !== '') {
          setSearch(true);
          setFilterSearch(data);
        } else {
          setSearch(false);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="container">
        <div className="weather">
          <h1>Weather</h1>
          <Search
            handleSearch={handlesearch}
            cityName={cityName}
            setCityName={setCityName}
          />
          {isLoading && <p>Loading...</p>}
          {hasError && <p>we couldn't find {cityName}!! </p>}
          {!search && (
            <p> No city input yet, type in a city and click search!</p>
          )}
          {search && !hasError && FilterSearch.name && (
            <CityWeather
              name={FilterSearch.name}
              coord={FilterSearch.coord}
              sys={FilterSearch.sys}
              main={FilterSearch.main}
              weather={FilterSearch.weather}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Weather;
