import React from 'react'
import './App.css'

function HobbyList () {
  const Hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing'
  ]
  return (
    <div className='App'>
      My Hobbies
      <ul className='list'>
        {Hobbies.map(hobby => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

export default HobbyList
