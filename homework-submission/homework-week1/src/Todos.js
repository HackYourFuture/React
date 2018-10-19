import React from 'react';

class Todos extends React.Component {
  render() {
    return (
      <li>
        <div className='todo'>
          <p>description: {this.props.description}</p>
          <p>deadline: {this.props.deadline}</p>
        </div>
      </li>

    )
  }

}

export default Todos