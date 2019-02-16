import React, { Component } from 'react';

function listItem(label, value) {
  return  <li><span>{label}</span><span>{value}</span></li>;
}
class WeatherResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      result: null
    };
  }
  componentDidUpdate(prevProps) {
    const { search } = this.props;
    if (prevProps.search !== search) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  }
  render() {
    const { error, isLoaded, result } = this.state;
    if (!isLoaded) return null;
    if (error) {
      console.error(error);
      return <p>{error}</p>
    };
    const {
      cod,
      message,
    } = result;
    if (cod !== 200) return <p>{message}</p>;

    const {
      main : {
        humidity,
        temp,
        temp_max,
        temp_min
      },
      name,
      weather
    } = result;
    const { description } = weather[0];

    return (
      <ul>
        {listItem('location', name)}
        {listItem('description', description)}
        {listItem('humidity', `${humidity}%`)}
        {listItem('tempature', `${temp}°C`)}
        {listItem('Max tempature', `${temp_max}°C`)}
        {listItem('Min tempature', `${temp_min}°C`)}
      </ul>
    );
  }
}

export default WeatherResult;
