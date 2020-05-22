import React from 'react';
import './App.css';
import HobbyList from './HobbyList';
import Guarantee from './Guarantee';
import deliveryImg from './f-delivery.png';
import coinImg from './coin.png';
import chatImg from './chat.png';
import Counter from './Counter';


function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="box">       
        <Guarantee 
        img={deliveryImg} 
        title="Free Shipping"
        description="Your products are always shipped free."
        />
          <Guarantee 
        img={coinImg} 
        title="100% Money Back"
        description="You can return your product and get your money back"
        />
          <Guarantee 
        img={chatImg} 
        title="Online Support 24/7"
        description="Call our free customer service number anytime"
        />
      </div>
      <Counter />
    </div>
  );
}

export default App;
