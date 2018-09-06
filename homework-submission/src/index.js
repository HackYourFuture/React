import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from  'mobx-react'
import registerServiceWorker from './registerServiceWorker';
import StoreTodos from './store'
const root=(
  <Provider StoreTodo={StoreTodos}>
  <App/>
  </Provider>
)
ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
