import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
           <Switch>
             <Route path="/edit/:slug" component={EditPage} />
             <Route exact path="/:slug" component={ShowPage} />
             <Route exact path="/" component={ShowPage} />
           </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
