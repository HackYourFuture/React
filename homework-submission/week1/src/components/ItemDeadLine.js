import React from 'react';
import moment from 'moment';

class ItemDeadLine extends React.Component {
  render() {
    return <span className='deadline'> {moment(this.props.deadline).format('DD-MM-YYYY')} </span>;
  }
}

export default ItemDeadLine;