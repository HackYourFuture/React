import React, { Component } from 'react';
import PreviousHomework1 from './PreviousHomeWork1';
import PreviousHomework2 from './PreviousHomework2';

export class PreviousHomeworks extends Component {
  render() {
    return (
      <div>
        <PreviousHomework1 />
        <PreviousHomework2 />
      </div>
    );
  }
}

export default PreviousHomeworks;
