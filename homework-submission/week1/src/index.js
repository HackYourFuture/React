import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import todos from './stores/todosStore.js'

const root = (<Provider todos={todos}>
  <App />
</Provider>)

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
