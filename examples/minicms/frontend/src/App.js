import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ShowPage from './ShowPage';
import EditPage from './EditPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <h1>ACME Inc</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </nav>
          </header>
          <main>
           <Route path="/edit/:slug" component={EditPage} />
           <Route exact path="/:slug" component={ShowPage} />
           <Route exact path="/" component={ShowPage} />
          </main>
        </div>
      </Router>
    );
  }
}
