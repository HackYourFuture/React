import React from 'react';
import './App.css';
import HobbyList from './HobbyList';
import Guarantee from './Guarantee';
import deliveryImg from './f-delivery.png';
import coinImg from './coin.png';
import chatImg from './chat.png';
import Counter from './Counter';


const containers = [
	{
		img: deliveryImg,
		title: "Free Shipping",
		description:"Your products are always shipped free",
	},
	{
		img: coinImg,
		title: "100% Money Back",
		description:"You can return your product and get your money back",
	},
	{
		img: chatImg,
		title: "Online support 24/7",
		description:"Call our free customer service number anytime",
	},
];


function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="box">       
        {containers.map(container => <ul><Guarantee 
        img = {container.img}
        title = {container.title}
        description= {container.description} /></ul>)}
      </div>
    <Counter />
    </div>
  );
}

export default App;
