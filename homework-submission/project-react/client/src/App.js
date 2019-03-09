import React, { Component } from 'react';
import FetchStuff from './Component/Fetch.js';
import Item from './Component/Item.js';
import List from './Component/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ' welcome ',
      info: '',
      backEndGreeting: '',
      againBackEnd: '',
    };
  }

  componentDidMount() {
    FetchStuff('https://uinames.com/api/?amount=10').then(res => {
      const Data = res.map(elem => <Item key={elem.name} name={elem.name} />);
      this.setState({ info: Data });
    });
    FetchStuff('/greeting').then(res => {
      const Data = res.greeting;
      this.setState({ backEndGreeting: Data });
    });
    FetchStuff('/hello').then(res => {
      const Data = res.todo;
      this.setState({ againBackEnd: Data });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.greeting}</h1>
        <List info={this.state.info} />
        <h3>{this.state.backEndGreeting}</h3>
        <h3>{this.state.againBackEnd}</h3>
      </div>
    );
  }
}

export default App;
