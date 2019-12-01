import React, { useState, useEffect } from 'react';
import Button from './button';
import CityProfile from './CityProfile';
import Form from './Form';

function Cities(props) {
  const [city, setCity] = useState({});
  const [loading, setLoading] = useState(true);
  const [inputCity, setInputCity] = useState('');
  const [errorState, setErrorState] = useState(false);

  const api_key = 'c9e673ce8d31f4d210954edd51e08fed';

  async function getCity() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=${api_key}`,
    );
    const json = await response.json();

    setCity(json);
    setLoading(false);
  }

  const handleOnSubmitChange = cities => {
    setInputCity(cities);
  };

  return (
    <div>
      <Button clickHere={() => getCity()} buttonText="Click" />
      {loading === false && (
        <CityProfile
          name={city.name}
          country={city.sys.country}
          condition={city.weather[0].main}
          description={city.weather[0].description}
          min_temp={city.main.temp_min}
          max_temp={city.main.temp_max}
          longitude={city.coord.lon}
          latitude={city.coord.lat}
        />
      )}
      <Form
        onSubmitForm={({ cities }) => {
          handleOnSubmitChange(cities);
        }}
      />
    </div>
  );
}

export default Cities;
