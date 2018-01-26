import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'mobx-react';
import TasksStore from './stores/TasksStore'

const Root = (
    <Provider>
        <App/>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));