import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Week1 from './components/Week1/Week1';
import Week2 from './components/previousHomeworks/previousHomeworks';
import Home from './components/Main/Main';
import NavBar from './components/Navbar/Navbar';
import Week3 from './components/Users/Users';
import ErrorHandler from './components/Error/Error';

class App extends React.Component {
  state = {
    data: [],
    isLoading: true,
    error: '',
  };
  navElements = {
    Home: { path: '/', description: '' },
    'Week 1': { path: '/week1', description: 'Static Todo list' },
    'Week 2': { path: '/week2', description: 'Dynamic Todo list App' },
    'Week 3': { path: '/week3', description: 'Lifecycle methods and fetch api' },
  };

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10')
      .then(response => response.json())
      .then(result => this.setState({ data: result, isLoading: false }))
      .catch(error => this.setState({ error: error.message }));
  }
  render() {
    const { data, error } = this.state;
    return (
      <BrowserRouter>
        <div>
          <NavBar navElements={this.navElements} />
          <Switch>
            <Route exact path="/" render={() => <Home elements={this.navElements} />} />
            <Route path="/week1" component={Week1} />
            <Route path="/week2" component={Week2} />
            <Route path="/week3" render={() => <Week3 data={data} error={error} />} />
            <Route render={() => <ErrorHandler error="something went wrong" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
