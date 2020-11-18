import React, { useState } from 'react'
import City from './city';

const Search = () => {
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [isLoading, setLoading] = useState(false); 
    const [hasError, setError] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const API_KEY = 'a54b947f262e2c5b975e64258dc64f90';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}&units=metric`

    const fetchWeather = async(e) => {
        if(query !== ''){
            setLoading(true);
            fetch(url)
            .then(res => res.json())
            .then(data => {
                if( data.cod === '404'){
                    setNoResults(true);
                    setLoading(false);
                    setWeatherData('')
                } else {
                    console.log(data);
                    setQuery(data);
                    setWeatherData(data);
                    setLoading(false);
                }
                setQuery('');
            })
            .catch(error => {  
                setError(true);
                setLoading(false);
            });
        }
    }

    return (
        <div className='weather-container'>
            <div className='search-element'>
                <input 
                    className='search-input'
                    type='text'
                    placeholder='search by city...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className='search-button' onClick={() => {fetchWeather(query)}}>🔍</button>
            </div>
            <div className='weather-card'>
                {isLoading && <p>Loading...</p>}
                {weatherData && <City weatherData={weatherData} />}
                {hasError && <p>Uh oh, something has gone wrong...</p>}
                {noResults && <p>Uh oh, no results found</p>}
            </div>
        </div>
    )
}

export default Search;
