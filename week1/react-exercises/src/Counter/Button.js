import React from 'react'
function Button (props) {
  const { text, handleOnClick } = props
  return <button onClick={handleOnClick}>{text}</button>
}

export default Button
