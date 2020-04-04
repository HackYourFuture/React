import React from 'react'
import './App.css'
function App (props) {
  const title = props.title
  function Guarant (props) {
    const offer = props.offer
    return (
      <div className='offer-card'>
        <img src={offer.img} alt={offer.title} />;<h3>{offer.title}</h3>
        <p>{offer.description}</p>
      </div>
    )
  }
  const offers = props.Guarantee
  return (
    <div className='App'>
      <h1 className='title'>{title}</h1>
      {offers.map(offer => {
        return <Guarant offer={offer} />
      })}
    </div>
  )
}
export default App
