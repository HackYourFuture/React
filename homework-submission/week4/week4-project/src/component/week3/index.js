import React, { Component } from 'react';

import Spinner from './spinner/spinner';
import Card from './card';

class Week3 extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10', { crossDomain: false })
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res, isLoading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <React.Fragment>
        <div className="App">{isLoading ? <Spinner /> : <Card data={data} />}</div>
      </React.Fragment>
    );
  }
}

export default Week3;
