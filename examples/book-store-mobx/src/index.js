import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import BooksStore from './Stores/BookStore'
import registerServiceWorker from './registerServiceWorker';

const root = (
    <Provider BooksStore={BooksStore}>
        <App />
    </Provider>
);
ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
