import React from 'react';
<<<<<<< HEAD


export default class Date extends React.Component{
    render() {
        return (
            <div>
                {this.props.date.toDateString()}
            </div>
        );
    }
=======
import './date.css';

export default class Date extends React.Component {
  render() {
    return (
      <div className='comment--date'>{this.props.date.toDateString()}</div>
    );
  }
>>>>>>> 4a9ff3bd4372f9ba43916d7487e68c4ddaf3601b
}
