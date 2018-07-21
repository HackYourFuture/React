import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "mobx-react"
import todosStoreInstance from "./TodoItemsStore"

const Root = (
    <Provider TodoItemsStore={todosStoreInstance}>
        <App />
    </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
