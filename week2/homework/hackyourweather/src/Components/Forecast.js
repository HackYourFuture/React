import React, { useState } from 'react';
import CityCard from './CityCard';

export default function Forecast(props) {
   const [responseObj, setResponseObj] = useState({});
   const [input, setInput] = useState('');
   const [error, setError] = useState(false);
   const [isLoading, setLoading] = useState(false);

   const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`;

   function getForecast(event) { 
       event.preventDefault();
       if (input.length === 0) {
            return setError(true);
        }
        setError(false);
        setResponseObj({});
        setLoading(true);

        fetch(URL)
            .then(response => response.json())
            .then(response => {

            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });
  }

   return (
    <div>
        <h1>Weather</h1>
        <form onSubmit={getForecast}>
            <input
                type="text"
                placeholder="Search City"
                maxLength="50"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
            <button className="search" type="submit">Search</button>
        </form>
        <CityCard
            responseObj={responseObj}
            error={error} 
            isLoading={isLoading} 
            />
        {isLoading && <p> Loading {input} weather ... </p>}
        {error && <p> Uppss! </p>}
</div>
   )
}
