import React from "react";

import CounterPanel from "./components/CounterPanel";
import InitCount from "./components/InitCount";

class App extends React.Component {
  state = {
    count: null
  };

  handleIncreaseCount = () => this.setState({ count: this.state.count + 1 });
  handleDecreaseCount = () => this.setState({ count: this.state.count - 1 });
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      count: event.target.number.value
    });
    event.target.number.value = null;
  };

  render() {
    const { count } = this.state;
    return (
      <div className="buttonContainer panel">
        <InitCount setNumber={this.handleSubmit} />
        <CounterPanel
          count={count}
          counterName="Counter"
          handleIncreaseCount={this.handleIncreaseCount}
          handleDecreaseCount={this.handleDecreaseCount}
        />
      </div>
    );
  }
}

export default App;
