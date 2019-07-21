import React from 'react';
import WeatherInput from './WeatherInput';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

// Get city name input
// get weather info of that city that user inputted
// draw the weather info on charts
class WeatherChart extends React.Component {
  state = {
    weatherData: null,
    error: false,
    loading: false,
  };

  getWeather = cityName => {
    const apiURL = '/weather';

    this.setState({ loading: true });
    fetch(apiURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cityName }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ weatherData: data, loading: false });
      })
      .catch(e => {
        this.setState({ error: true, loading: false });
      });
  };

  render() {
    console.log('====================================');
    console.log(this.state);
    console.log('====================================');

    let chartData=[]

    if (this.state.weatherData) {
      const{list} = this.state.weatherData;
      chartData = list.map(listItem => {
        const dateTime = listItem.dt_txt;
        const temperature = listItem.main.temp - 273.15;
        return ({name:dateTime, value:temperature})
      })
    }

    return (
      <div className="weatherChart">
        <WeatherInput
          submitCityName={cityName => {
            this.getWeather(cityName);
          }}
        />
        <AreaChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        
      </div>
    );
  }
}

export default WeatherChart;