import React from 'react';

class ItemDeadLine extends React.Component {
  render() {
    return <span className='deadline'> {this.props.deadline}   </span>;
  }
}

export default ItemDeadLine;