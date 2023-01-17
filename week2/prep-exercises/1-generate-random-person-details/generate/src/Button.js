import React from 'react'

const Button = ({ title, getPerson }) => {
  return (
    <div>
      <button onClick={getPerson} >{title}</button>
    </div>
  )
}

export default Button;
