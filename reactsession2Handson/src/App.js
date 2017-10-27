import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import moment from 'moment-timezone'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      TokioTimeZone: new Date(Date.now()).toTimeString(),
      DimascusTimeZone: new Date(Date.now()).toTimeString(),
      AmsterdamTimeZone: new Date(Date.now()).toTimeString(),
    }

   this.IntervalID= setInterval(() => {
      this.setState({
        TokyoTimeZone: moment(Date.now()).tz('Asia/Tokyo').format('h:mm:ss a'),
        DamascusTimeZone:moment(Date.now()).tz('Asia/Damascus').format('h:mm:ss a'),
        AmsterdamTimeZone:moment(Date.now()).tz('Europe/Amsterdam').format('h:mm:ss a')
      })
    }, 1000)
  }


  render() {
   
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Clock zoneString={"Amsterdam"} timeString={this.state.AmsterdamTimeZone}></Clock>
        <Clock zoneString={"Tokyo"} timeString={this.state.TokyoTimeZone}></Clock>
        <Clock zoneString={"Damascus"} timeString={this.state.DamascusTimeZone}></Clock>

      </div>
    );
  }
}

export default App;
