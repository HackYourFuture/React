import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('counter')
@observer
export default class Counter extends React.Component {
  render() {

    const { count, decreaseCount, increaseCount } = this.props.counter

    return (
      <div className='panel'>
        <h1>
          Counter
          <span className='header-count'>| {count}</span>
        </h1>
        <button onClick={increaseCount}>
          Increase
        </button>
        <button onClick={decreaseCount}>
          Decrease
        </button>
      </div>
    )
  }
}