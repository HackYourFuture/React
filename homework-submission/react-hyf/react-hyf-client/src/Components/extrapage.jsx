import React, { Component } from 'react';

class Extra extends Component {
  render() {
    return (
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        src={`https://www.youtube.com/embed/0PD2syAQMjk?autoplay=1`}
        allow="autoplay"
        frameBorder="0"
      />
    );
  }
}

export default Extra;
