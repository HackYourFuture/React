import React, { useEffect } from 'react'

function Button ({ type, text, handleButton, disabled }) {
  return (
    <button disabled={disabled} type={type} onClick={handleButton}>
      {text}
    </button>
  )
}

export default Button
