import React from 'react';
import "./Button.css"

const Button = ({ getDogPhoto }) => {
  return (
    <div>
      <button onClick={getDogPhoto}>Click</button>
    </div>
  )
}

export default Button
