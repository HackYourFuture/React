import React from 'react';

export default class Picture extends React.Component {
  render() {
    return (
      <div className='comment__picture'>
        <img
          src={`https://www.gravatar.com/avatar/?d=${this.props.imageType}`}
          alt={this.props.username}
        />
      </div>
    )
  }
}
