import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Week1 from './components/week1';
import Week2 from './components/week2';
import Home from './components/main';
import NavBar from './components/NavBar';
import Week3 from './components/users';

class App extends React.Component {
  state = {
    navElements: {
      Home: { path: '/', description: '' },
      'Week 1': { path: '/week1', description: 'Static Todolist' },
      'Week 2': { path: '/week2', description: 'Dynamic Todolist' },
      'Week 3': { path: '/week3', description: 'Lifecyle methods and fetch api' },
    },
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
      <BrowserRouter>
        <div>
          <NavBar navElements={this.state.navElements} />
          <Switch>
            <Route exact path="/" render={() => <Home elements={this.state.navElements} />} />
            <Route path="/week1" component={Week1} />
            <Route path="/week2" component={Week2} />
            <Route
              path="/week3"
              render={() => <Week3 data={this.state.data} error={this.state.error} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
