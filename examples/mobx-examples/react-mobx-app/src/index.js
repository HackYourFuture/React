import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';
import UserInstance from './stores/user.store';

const Root = (
    <Provider User={UserInstance} >
        <App />
    </Provider>
    );

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
