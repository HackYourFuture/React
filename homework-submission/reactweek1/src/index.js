import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import todoStore from './store/todoStore';
import { Provider } from 'mobx-react';

const Root = (
  <Provider todoStore = {todoStore}>
    <App/>
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
