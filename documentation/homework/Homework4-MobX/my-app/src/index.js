import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import todoStore from './store/TodoStore';
import registerServiceWorker from './registerServiceWorker';

render( <Provider todoStore = {todoStore} >
        <App / >
        </Provider>, document.getElementById('root'));
registerServiceWorker();
