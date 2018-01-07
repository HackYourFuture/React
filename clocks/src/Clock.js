import React from 'react'
import moment from 'moment'
import momentTimezone from 'moment-timezone' // eslint-disable-line

export default class Clock extends React.Component {

  state = {
    currentTime: moment().tz(this.props.timeZone),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  tick = () => {
    this.setState({
      currentTime: moment().tz(this.props.timeZone),
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  render() {

    const { city, timeZone, handleDeleteClock } = this.props

    return (
      <div className='Clock'>
        <div>City: {city}</div>
        <div>Time Zone: {timeZone}</div>
        <div>{this.state.currentTime.toLocaleString()}</div>
        <button onClick={() => handleDeleteClock(city)}>Delete clock</button>
      </div>
    )
  }
}