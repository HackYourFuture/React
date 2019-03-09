import React, { Component } from 'react';

export default class HomeWorkWeek3 extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      hits: [],
    };
  }
  componentDidMount() {
    console.log('MOUNT');
    fetch('https://uinames.com/api/?amount=10')
      .then(console.log('in the fetch'))
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  render() {
    console.log('inside render');
    const { hits } = this.state;
    console.log(hits);
    return hits.map(newHit => (
      <div className="details">
        <div className="Name">
          {newHit.name} {newHit.surname}
        </div>
        <div className="Info">
          Gender: {newHit.gender}
          <br />
          Origin: {newHit.region}
        </div>
      </div>
    ));
  }
}
