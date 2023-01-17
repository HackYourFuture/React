import React from 'react';


const Person = ({ person }) => {

  return (
    <div>
      {person &&
        <ul>
          {Object.values(person).map((value, index) => <li key={index}>{value}</li>)}
        </ul>}
    </div>
  )
}

export default Person
