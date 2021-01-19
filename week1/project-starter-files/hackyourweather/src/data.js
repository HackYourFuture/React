import weather from "./city-weather.json";

console.log(weather);
function Cities() {
  return weather.map((item, key) => {
    return (
      <City
        key={key}
        name={item.name + ", " + item.sys.country}
        main={item.weather[0].main}
        description={item.weather[0].description}
        minTemp={item.main.temp_min}
        maxTemp={item.main.temp_max}
        location={item.coord}
      />
    );
  });
}

function City(props) {
  return (
    <div className="city">
      <h1>{props.name}</h1>
      <div className="weather-status">
        <h2>{props.main}</h2>
        <p>{props.description}</p>
      </div>
      <hr />
      <p>
        Min temp: {props.minTemp}
        <br />
        Max temp: {props.maxTemp}
        <br />
        Location: {props.location.lat}, {props.location.lon}
      </p>
    </div>
  );
}

export default Cities;
