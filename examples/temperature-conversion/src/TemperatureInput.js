import React from 'react';

export default class TemperatureInput extends React.Component {

  render() {

    const { onChange, temp, scale } = this.props;

    return (
      <div>
        <label>{scale === 'c' ? 'Celsius' : 'Fahrenheit'}</label>
        <input
          type='number'  
          value={temp}
          onChange={(event) => onChange(event.target.value, scale)}
        />
      </div>
    );
  }
}
