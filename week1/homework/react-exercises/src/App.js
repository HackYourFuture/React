import React from 'react';
import './App.css';
import HobbyList from './hobbies';
import Guarentee from './customer_service';
import Counter from './counter';

const info = [
  {
      img : "./chat.png",
      title:"Online Support 24/7",
      description:"We are always with you. Whenever you need assistance you come and check out our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra tincidunt mattis. Fusce eu finibus sapien. Nunc ornare lobortis finibus. Praesent tristique volutpat finibus. Vestibulum ac nisi iaculis risus posuere sagittis a sed ligula. Suspendisse dolor dolor, gravida et placerat vitae, suscipit non arcu."
  },
  {
      img : "./coin.png",
      title:"%100 Money back",
      description:"If you didn't like what you get, without any reason you can return the good. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra tincidunt mattis. Fusce eu finibus sapien. Nunc ornare lobortis finibus. Praesent tristique volutpat finibus. Vestibulum ac nisi iaculis risus posuere sagittis a sed ligula. Suspendisse dolor dolor, gravida et placerat vitae, suscipit non arcu."
  },
  {
      img : "./f-delivery.png",
      title:"Free Shipping",
      description:"If you buy it you will get free of charge. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra tincidunt mattis. Fusce eu finibus sapien. Nunc ornare lobortis finibus. Praesent tristique volutpat finibus. Vestibulum ac nisi iaculis risus posuere sagittis a sed ligula. Suspendisse dolor dolor, gravida et placerat vitae, suscipit non arcu."
  },
]

function App() {
  return (
      <>
        <HobbyList/>
        <div className='customerService'>
          <Guarentee img={info[0].img} title={info[0].title} description={info[0].description}/>
          <Guarentee img={info[1].img} title={info[1].title} description={info[1].description}/>
          <Guarentee img={info[2].img} title={info[2].title} description={info[2].description}/>
        </div>
        <Counter />
      </>
  );
}

export default App;
