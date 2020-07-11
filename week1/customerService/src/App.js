import React from 'react';
import Guarantee from './component/Guarantee';
import img1 from './component/ex2/chat.png';
import img2 from './component/ex2/coin.png';
import img3 from './component/ex2/f-delivery.png';


const dataArray = [
  {
    img: img1,
    title: 'Online support 24/7',
    description: 'Great Online support',
  },
  {
    img: img2,
    title: '100% Money back',
    description: 'All your Money back',
  },
  {
    img: img3,
    title: 'Free shipping',
    description: 'Fast shipping',
  },
];

function App(){
  return(
    <div>
        {dataArray.map((data) => (
          <Guarantee {...data} />
        ))}
      </div>
  );
}

export default App;
