import React from 'react';
import './App.css';
import Spinner from './components/spinner/index';
import HomeworkWeek3 from './components/HomeworkWeek3/index';

class App extends React.Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10')
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false }));
  }

  render() {
    const { data, isLoading } = this.state;
    return <div className="App"> {isLoading ? <Spinner /> : <HomeworkWeek3 data={data} />} </div>;
  }
}
export default App;
