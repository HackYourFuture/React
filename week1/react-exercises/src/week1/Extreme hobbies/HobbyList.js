import React from 'react'
import Hobbies from './Hobbies'

function HobbyList () {
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing'
  ]

  const hobby = hobbies.map((hobby, index) => <p key={index}>{hobby} </p>)
  return (
    <>
      <Hobbies hobby={hobby} />
    </>
  )
}

export default HobbyList
