import React from 'react';
import Spinner from './components/Spinner/spinner';
import ApiCall from './components/ApiCall/ApiCall';

class App extends React.Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10')
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false }))
      .catch(error => alert(`${error} Check The Url!`));
  }

  render() {
    const { data, isLoading } = this.state;
    return <div className="App"> {isLoading ? <Spinner /> : <ApiCall data={data} />} </div>;
  }
}
export default App;
