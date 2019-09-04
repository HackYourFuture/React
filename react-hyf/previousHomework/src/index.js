import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/PreviousHomework';
import * as serviceWorker from './serviceWorker';
import PreviousHomework from './components/PreviousHomework';

const Index = () => (
  <App>
    <PreviousHomework></PreviousHomework>
  </App>
);

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
