import React from 'react';

class WeatherInput extends React.Component {
  state = {
    cityName: '',
  };

  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            // prevent default behaviour
            event.preventDefault();
            const { cityName } = this.state;
            this.props.submitCityName(cityName);
          }}
        >
          <input
            type="text"
            value={this.state.cityName}
            onChange={event => {
              this.setState({ cityName: event.target.value });
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default WeatherInput;