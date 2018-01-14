import React from 'react';

export default class Description extends React.Component {

  render() {
    return (
      <div className="Description"> 
        {this.props.description}
      </div>
    )
  }
} 