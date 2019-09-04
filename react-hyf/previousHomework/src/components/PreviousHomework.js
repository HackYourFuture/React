import React from 'react';
import { GlobalStyle } from '../styled';
import TaskContainer from './TaskContainer';

const tasks = [
  {
    id: 1,
    description: 'Get out of bed',
    deadline: '2017-09-11',
    done: true
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadline: '2017-09-10',
    done: false
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadline: '2017-09-09',
    done: false
  }
];

const PreviousHomework = () => (
  <React.Fragment>
    <GlobalStyle />
    <TaskContainer data={tasks} />
  </React.Fragment>
);

export default PreviousHomework;
