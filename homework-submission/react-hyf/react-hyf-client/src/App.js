import React from 'react';
import PreviousHomeworks from './components/previousHomeworks/previousHomeworks';
import HomeworkWeek3 from './components/Users/Users';

class App extends React.Component {
  state = {
    data: [],
    isLoading: true,
    error: '',
  };

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10')
      .then(response => response.json())
      .then(result => this.setState({ data: result, isLoading: false }))
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <React.Fragment>
        <PreviousHomeworks />
        <HomeworkWeek3 data={this.state.data} error={this.state.error} />
      </React.Fragment>
    );
  }
}

export default App;
