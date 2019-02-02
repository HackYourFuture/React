import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import AboutPage from '../pages/About';
import TeachingPage from '../pages/Teaching';
import ApplyPage from '../pages/Apply';

class StaticApp extends Component {
  render() {
    return (
      <Router>
        <div className="site">
          <header>
            <h1 className="site__title">Hack Your Future</h1>
            <nav className="site__nav">
              <ul>
                <li className="site__nav-item"><NavLink to="/about/">What is Hack Your Future?</NavLink></li>
                <li className="site__nav-item"><NavLink to="/teaching/">What do we teach?</NavLink></li>
                <li className="site__nav-item"><NavLink to="/apply/">Who can apply?</NavLink></li>
              </ul>
            </nav>
          </header>
          <Route path="/" exact render={() => <Redirect to="/about/" />} />
          <Route path="/about/" exact component={ AboutPage } />
          <Route path="/teaching/" exact component={ TeachingPage } />
          <Route path="/apply/" exact component={ ApplyPage } />
        </div>
      </Router>
    );
  }
}

export default StaticApp;
