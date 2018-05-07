import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function tick() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(tick, 1000);

registerServiceWorker();
