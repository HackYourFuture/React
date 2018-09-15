import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './stores/TodoList';
import { Provider } from 'mobx-react';

const Root = (
  <Provider>
    <App TodoList={TodoList} />
  </Provider>
);


ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
