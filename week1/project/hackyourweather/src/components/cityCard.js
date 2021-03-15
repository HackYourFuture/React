import cityWeather from "../city-weather";

const CityCard = () => {
  return (
    <div className="flex-container">
      {cityWeather.map(weatherData => {
        return (
          <div key={weatherData.id} className="card-container">
            <h2 className="center-text">
              {weatherData.name}, <span>{weatherData.sys.country}</span>
            </h2>
            <h3 className="center-text">{weatherData.weather[0].main}</h3>
            <h4 className="center-text">
              {weatherData.weather[0].description}
            </h4>
            <p>
              Max temp: <span>{weatherData.main.temp_max}</span>
            </p>
            <p>
              Min temp: <span>{weatherData.main.temp_min}</span>
            </p>
            <p>
              Location: {weatherData.coord.lon}, {weatherData.coord.lat}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CityCard;
