import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "mobx-react";
import Stores from "./Stoers";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider {...Stores}>
        <App />
    </Provider >


    , document.getElementById('root'));
registerServiceWorker();
