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
      <tr>
        <th>{city}</th>
        <th>{timeZone}</th>
        <th>{this.state.currentTime.toLocaleString()}</th>
        <th><button onClick={() => handleDeleteClock(city)}>Delete clock</button></th>
      </tr>
    )
  }
}