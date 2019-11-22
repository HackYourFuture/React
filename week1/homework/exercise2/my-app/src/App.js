import React from 'react';
import './App.css';
import Guarantee from './components/Guarantee';
import delivery from './images/f-delivery.png';
import coin from './images/coin.png';
import support from './images/chat.png';

function App() {
  return (
    <div className="all-part">
      <Guarantee
        image={delivery}
        title="Free Shipping"
        description="Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Guarantee
        image={coin}
        title="100% Money Back"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <Guarantee
        image={support}
        title="Online Support 24/7"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
    </div>
  );
}

export default App;
