import React from 'react';
import ReactDOM from 'react-dom';
import PreviousHomework from './PreviousHomework';
import HomeworkWeek3 from './components/People';

ReactDOM.render(
  <React.Fragment>
    <HomeworkWeek3 />
    <PreviousHomework />
  </React.Fragment>,
  document.getElementById('app'),
);
