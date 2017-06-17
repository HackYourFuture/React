import React from 'react'
import PersistedComponent from './PersistedComponent'
import Clock from './Clock'
import './App.css'

export default class App extends PersistedComponent {

  constructor() {
    super()

    this.state = {
      clocks: [],
      newClock: {
        city: "",
        timezone: ""
      },
      weird: "very"
    }

    this.renderAddClock = this.renderAddClock.bind(this)
    this.handleCityInput = this.handleCityInput.bind(this)
    this.renderClocks = this.renderClocks.bind(this)
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
    // const {clocks} = this.state
    //
    // return (
    //   <div className="app--clocks">
    //     <Clock/>
    //
    //     {clocks.map((clock, index) => this.renderClock(clock, index))}
    //   </div>
    // )
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
    // this.setState(
    //   {
    //     newClock: {
    //       city: event.target.value
    //     }
    //   })
  }

  renderAddClock() {
    return (
      <div className="app--add-clock">
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleCityInput} />
          <input type="submit" value="Add new clock" />
        </form>
      </div>
    )
  }

  onClockClick = (index) => {
    const clocks = [...this.state.clocks]
    clocks.splice(index, 1)

    // this.setState({clocks})
  }

  // This is done to bind this function to <this>.
  // instead of `onAddClick() { ... }`
  // so that we don't have to type `this.onAddClick.bind(this)`
  onAddClick = () => {
    const city     = prompt("What is the city?")
    const timeZone = prompt("What is the Time Zone?")

    const clock = {city, timeZone}
    const clocks = [...this.state.clocks, clock]

    // this.setState({clocks})
  }

}
