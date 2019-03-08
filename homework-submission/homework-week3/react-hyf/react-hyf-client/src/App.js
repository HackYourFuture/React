import React, { Component } from 'react';
import './App.css';
import PreviousHomework from './PreviousHomework';
import HomeworkWeek3 from './HomeworkWeek3';

const url = ' https://uinames.com/api/?amount=10';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch(url)
      .then(data => data.json())
      .then(results => this.setState({ data: results }));
  }
  render() {
    return (
      <div className="App">
        <PreviousHomework />
        <HomeworkWeek3 data={this.state.data} />
      </div>
    );
  }
}

export default App;
