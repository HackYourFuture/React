import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppContainer from './components/AppContainer';
import { UserProvider } from './contexts/UserContext';
import Home from './components/Home';
import HomeNavbar from './components/Home-Navbar';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <HomeNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={AppContainer} />
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
