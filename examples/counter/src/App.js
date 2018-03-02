import React from 'react'

class App extends React.Component {

  state = {
    count: 0,
  }

  handleIncreaseCount = () => this.setState({ count: this.state.count + 1 })
  handleDecreaseCount = () => this.setState({ count: this.state.count - 1 })

  render() {

    return (
      <div className='panel'>
        <h1>
          Counter
          <span className='header-count'>| {this.state.count}</span>
        </h1>
        <button onClick={this.handleIncreaseCount}>
          Increase
        </button>
        <button onClick={this.handleDecreaseCount}>
          Decrease
        </button>
      </div>
    );
  }
}

export default App;
