import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import Page from './Page';

class DynamicApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {}
    }
  }

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
          <Route path="/:page/" component={ Page } />
        </div>
      </Router>
    );
  }
}

export default DynamicApp;
