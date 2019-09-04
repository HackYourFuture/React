import React from 'react';
import ReactDOM from 'react-dom';
import HomeworkWeek3 from './HomeworkWeek3';
import * as serviceWorker from './serviceWorker';
import './assets/scss/style.scss';

ReactDOM.render(<HomeworkWeek3 />, document.getElementById('root'));

serviceWorker.unregister();
