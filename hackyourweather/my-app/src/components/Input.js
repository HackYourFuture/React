import React from 'react'


function Input ({handleSubmit, handleInput,  buttonName, disabled, type }) {
  return(
 <div> 
 <form onSubmit={handleSubmit} className='search-form'>
    <input
      className='search-bar'
      type={'text'}
      onChange={handleInput}
      placeholder={'Type a city...'}
  
    />
    <button disabled={disabled} className='search-btn' type={type}>
      {buttonName}
    </button>
  </form>
  </div>)
}

export default Input
