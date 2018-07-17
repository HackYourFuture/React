import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import TodoInstance from './store/TodoStore.js';
const Root = (
    <Provider TodoStore={TodoInstance} >
        <App />
    </Provider>
);


ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
