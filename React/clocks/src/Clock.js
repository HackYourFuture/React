import React from 'react'
import PropTypes from 'prop-types'
import './Clock.css'
import Moment from 'moment-timezone'

export default class Clock extends React.Component {

	static propTypes = {
		timeZone: PropTypes.string,
		city:     PropTypes.string,
		onClick:  PropTypes.func
	}

	static defaultProps = {
		timeZone: 'utc',
		city:     'UTC',

		onClick:  () => undefined
	}

  state = {
    currentTime: new Date()
  }

  getCurrentTime() {
  	const {currentTime} = this.state
  	const {timeZone} = this.props

    const moment = Moment(currentTime)
    return moment.tz(timeZone)
  }

  updateTime() {
    this.setState({currentTime: new Date()})
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.updateTime()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
  	const {city, onClick} = this.props
  	const moment = this.getCurrentTime()

    return (
      <div className="clock" onClick={onClick}>
        <span className="clock--label">The current time in {city} is: </span>
        <span className="clock--time">
          <span className="clock--hours">{moment.format('HH')}</span>
          <span className="clock--minutes">:{moment.format('mm')}</span>
          <span className="clock--seconds">:{moment.format('ss')}</span>
        </span>
      </div>
    )
  }

}