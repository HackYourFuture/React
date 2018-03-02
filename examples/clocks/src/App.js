import React from 'react'
import Clock from './Clock'

class App extends React.Component {

  state = {
    clocks: []
  }

  handleCreateClock = () => {
    const city = prompt('What is the city?')
    const timeZone = prompt('What is the Time Zone?')

    if (city && timeZone) {
      const newClocks = this.state.clocks.concat([{
        city,
        timeZone,
      }])

      this.setState({
        clocks: newClocks,
      })
    }
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

    const { clocks } = this.state
    const clockCount = clocks.length

    return (
      <div className='panel'>
        <h1>
          World clocks
          <span className='header-count'>| {clockCount} clock{clockCount !== 1 ? <span>s</span> : null}</span>
        </h1>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Timezone</th>
              <th>Current time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clocks.map(clock =>
              <Clock
                city={clock.city}
                timeZone={clock.timeZone}
                key={clock.city}
                handleDeleteClock={this.handleDeleteClock}
              />
            )}
          </tbody>
        </table>
        <button onClick={this.handleCreateClock} className='create-clock-btn'>
          Create new clock
        </button>
      </div>
    );
  }
}

export default App;
