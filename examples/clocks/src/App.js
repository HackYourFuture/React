import React from 'react'
import Clock from './Clock'

class App extends React.Component {

  state = {
    clocks: []
  }

  handleCreateClock = () => {
    const city = prompt('What is the city?')
    const timeZone = prompt('What is the Time Zone?')

    const newClocks = this.state.clocks.concat([{
      city,
      timeZone,
    }])

    this.setState({
      clocks: newClocks,
    })
  }

  handleDeleteClock = (cityToDelete) => {
    const newClocks = this.state.clocks.filter(clock => {
      return clock.city !== cityToDelete
    })

    this.setState({
      clocks: newClocks,
    })
  }

  render() {

    return (
      <div>
        <h1>World clocks:</h1>
        <button onClick={this.handleCreateClock}>
          Create new clock
        </button>
        <div>
          {this.state.clocks.map(clock =>            
            <Clock
              city={clock.city}
              timeZone={clock.timeZone}
              key={clock.city}
              handleDeleteClock={this.handleDeleteClock}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
