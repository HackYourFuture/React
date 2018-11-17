import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import TasksStore from "./stores/TasksStore";
import { Provider } from "mobx-react";

const Root = (
    <Provider TasksStore={TasksStore}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
=======

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 5cb3e17339dff517c41b308c7cc994316f6d20b4

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
