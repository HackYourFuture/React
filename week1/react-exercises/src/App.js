import React from 'react';
import './App.css';
import HobbyList from './components/hobbies';
import Guarantee from './components/customer_service';
import deliver from './images/f-delivery.png';
import coin from './images/coin.png';
import chat from './images/chat.png';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <h1>Exercise 1: Extreme hobbies</h1>
      <HobbyList name = "Huseyin" />

      <h1>Exercise 2: Perfect customer service!</h1>
    <div className= "Guarantee">
      <Guarantee
        image = {deliver}
        alt = 'deliver'
        title = 'Free Shipping'
        description = 'Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum mal esuada aliquet libero viverra cursus.'
      />

      <Guarantee
        image = {coin}
        alt = 'coin'
        title = '100% Money back'
        description = 'Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum mal esuada aliquet libero viverra cursus.'
      />

      <Guarantee
        image = {chat}
        alt = 'chat'
        title = 'Online support 24/7'
        description = 'Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum mal esuada aliquet libero viverra cursus.'
      />
    </div>

        <h1>Exercise 3: It's higher than 10!</h1>
        <Counter />
    </div>
  );
}

export default App;
