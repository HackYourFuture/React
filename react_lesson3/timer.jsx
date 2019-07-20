import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
// Component Did Unmount

class App extends React.Component {
  state = {
    showTimer: false,
  };

  toggleTimer = () => {
    // if showTimer is true then make it false or if it is dalse make it tue
    this.setState({ showTimer: !this.state.showTimer });
  };

  render() {
    return (
      <div>
        <div>Show or Hide Timer</div>
        <button onClick={() => this.toggleTimer()}>
          {this.state.showTimer ? 'Hide' : 'Show'}{' '}
        </button>
        {this.state.showTimer && <Timer />}
      </div>
    );
  }
}

class Timer extends React.Component {
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    console.log('This is unmounted');
  }

  state = {
    intervalId: null,
    currentCount: 0,
  };

  startTimer = () => {
    const intervalId = setInterval(() => {
      this.setState({ currentCount: this.state.currentCount + 1 });
    }, 1000);

    this.setState({ intervalId });
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
  };

  resetTimer = () => {
    this.setState({ currentCount: 0 });
  };

  render() {
    const { currentCount } = this.state;
    return (
      <div>
        <div>Timer</div>
        <div>{currentCount}</div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
