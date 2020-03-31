import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


;


const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

const guaranteeBar = [
  {
    pic: require('./photos/f-delivery.png'),
    alt: 'a car going fast',
    title: "free shipping",
    description: "In consectetur minim nulla sunt commodo ex nisi fugiat commodo id nostrud. Ad ipsum nisi deserunt esse. Pariatur proident ex ipsum Lorem cupidatat anim do.",
  },
  {
    pic: require('./photos/coin.png'),
    alt: 'a hand holding a coin',
    title: "100% Money back",
    description: "In consectetur minim nulla sunt commodo ex nisi fugiat commodo id nostrud. Ad ipsum nisi deserunt esse. Pariatur proident ex ipsum Lorem cupidatat anim do.",
  },
  {
    pic: require('./photos/chat.png'),
    alt: 'chat boxes',
    title: "Online support 24/07",
    description: " In consectetur minim nulla sunt commodo ex nisi fugiat commodo id nostrud. Ad ipsum nisi deserunt esse. Pariatur proident ex ipsum Lorem cupidatat anim do.",
  },
]


ReactDOM.render(
  <React.StrictMode>
    <App hobbies={hobbies} guaranteeBar={guaranteeBar} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
