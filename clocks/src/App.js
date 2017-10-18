import React from 'react'
// import PersistedComponent from './PersistedComponent'
import Clock from './Clock'
import './App.css'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      clocks: [],
      newClock: {
        city: "",
        timezone: ""
      }
    }

    this.handleCityInput = this.handleCityInput.bind(this)
    this.handleTzInput = this.handleTzInput.bind(this)
  }


  render() {
    return (
      <div className="app">
        {this.renderClocks()}
        {this.renderAddClock()}
      </div>
    )
  }

  renderClocks() {
    const {clocks} = this.state

    return (
      <div className="app--clocks">
        <Clock/>

        {clocks.map((clock, index) => this.renderClock(clock, index))}
      </div>
    )
  }

  renderClock(clock, index) {
    const {timeZone, city} = clock

    return (
      <Clock
        key={index}
        timeZone={timeZone}
        city={city}
        onClick={() => { this.onClockClick(index) }}
      />
    )
  }

  handleCityInput(event) {
    this.setState(
      {
        newClock: {
          city: event.target.value,
          timezone: this.state.newClock.timezone
        }
      })
  }

  handleTzInput(event) {
    this.setState(
      {
        newClock: {
          city: this.state.newClock.city,
          timezone: event.target.value
        }
      }
    )
  }

  renderAddClock() {
    return (
      <div className="app--add-clock">
        <form onSubmit={this.onAddClick}>
          <input type='text' value={this.state.newClock.city} onChange={this.handleCityInput} /><br />
          <input type='text' value={this.state.newClock.timezone} onChange={this.handleTzInput} /><br />
          <input type="submit" value="Add new clock" />
        </form>
      </div>
    )
  }

  onClockClick = (index) => {
    const clocks = [...this.state.clocks]
    clocks.splice(index, 1)

    this.setState({clocks})
  }

  // This is done to bind this function to <this>.
  // instead of `onAddClick() { ... }`
  // so that we don't have to type `this.onAddClick.bind(this)`
  onAddClick = (event) => {
    event.preventDefault()
    const {city, timezone} = this.state.newClock
    const clock = {city, timezone}
    const clocks = [...this.state.clocks, clock]

    this.setState(
      {
        clocks,
        newClock: {
          city: "",
          timezone: ""
        }
      })
  }

}
