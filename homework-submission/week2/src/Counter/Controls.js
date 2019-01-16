import React, { Component } from 'react';

export default class Controls extends Component {
  render{
  return (
    <div>
      <button onClick={() => { this.props.onClick('Start') }}>Start</button>
      <button onClick={() => { this.props.onClick('Stop') }}>Stop</button>
      <button onClick={() => { this.props.onClick('Reset') }}>Reset</button>
    </div >
  );
}
}