import React from 'react';
import HobbyList from './components/ex1-Hobbies/HobbyList';
import Guarantee from './components/ex2-customerService/Guarantee';
import Counter from './components/ex3-counter/Counter';
import './App.css';
const src1 = './chat.png';
const src2 = './coin.png';
const src3 = './f-delivery.png';

function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="services-section">
        <Guarantee
          src={src3}
          title={'Free Shipping'}
          description={
            'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo.'
          }
        />
        <Guarantee
          src={src2}
          title={'100% Money back'}
          description={
            'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo.'
          }
        />
        <Guarantee
          src={src1}
          title={'online support 24/7'}
          description={
            'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo.'
          }
        />
      </div>
      <div className="counter">
        <Counter />
      </div>
    </div>
  );
}

export default App;
