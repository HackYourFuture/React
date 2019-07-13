import React from 'react';
import { PreviousHomeworks } from './components/PreviousHomeworks';
import { Homeworkweek3 } from './components/Homeworkweek3';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PreviousHomeworks />
        <Homeworkweek3 />
      </div>
    );
  }
}
