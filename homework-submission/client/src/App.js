import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Week3 from './Week3';
import WeatherChart from './WeatherChart';
import Week2 from './Week2';
import Home from './Home';

function App() {
  return (

        <Router>
        <div id="menu-outer">
          <div className="table">
          <nav className="navbar">
          <ul id="horizontal-list">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/weatherapp'} className="nav-link">WeatherApp</Link></li>
            <li><Link to={'/week3'} className="nav-link">Week3</Link></li>
            <li><Link to={'/week2'} className="nav-link">Week2</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/weatherapp' component={WeatherChart} />
              <Route path='/week3' component={Week3} />
              <Route path='/week2' component={Week2} />
          </Switch>
          </div>
        </div>
      </Router>


        
  );
}

export default App;
