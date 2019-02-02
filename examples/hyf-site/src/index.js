import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import StaticApp from './components/StaticApp';
ReactDOM.render(<StaticApp />, document.getElementById('root'));

// import DynamicApp from './components/DynamicApp';
// ReactDOM.render(<DynamicApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
