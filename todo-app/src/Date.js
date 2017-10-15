import React from 'react';
import './date.css';

export default class Date extends React.Component {
  render() {
    return (
      <div className='comment--date'>{this.props.date.toDateString()}</div>
    );
  }
}
