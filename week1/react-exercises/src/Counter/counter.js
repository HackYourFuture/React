// import React from 'react';
import React, { useState } from 'react'
import './App.css'
import Button from './Button'
function Counter (props) {
  const [count, handleCount] = useState(0)
  function CountInc (props) {
    handleCount(count + 1)
  }
  function CountDec (props) {
    handleCount(count - 1)
  }
  const feedback =
    count > 10 ? <p>It's higher than 10!</p> : <p>Keep counting ...</p>
  return (
    <div className='counter'>
      <Button text='Add 1!' handleOnClick={CountInc} />
      <Button text='Minus 1!' handleOnClick={CountDec} />
      <h1>Count : {count} </h1>
      <p>{feedback}</p>
    </div>
  )
}
export default Counter
