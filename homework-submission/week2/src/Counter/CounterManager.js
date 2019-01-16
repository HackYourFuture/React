import React, { Component } from 'react';

export default class CounterManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'Reseted',
      count: 0
    }
  }
  onReset() { }
  onStart() {
    this.setState({ type: 'Started' });

    setInterval(() => { this.setState((oldState, props) => ({ count: oldState.count++ })) }, 1000);
  }
  onStop() { }

  onClick(type) {
    switch (type) {
      case actions.reset:

    }
  }
  render() {
    return (
      <div>
        <Counter count>
          There is sth.</div>
        );
      }
}