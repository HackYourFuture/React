import React from 'react';
import './style.css';

class Spinner extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="wrapper">
        <div className="loader">
          <div className="wave top-wave">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="wave bottom-wave">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
