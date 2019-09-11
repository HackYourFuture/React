import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Week1 from './week1/Week1';
import Week2 from './week2/Week2';
import Week3 from './week3/HomeworkWeek3/Week3';
import './App.css';

function App() {
  return (
      <Router>
      <ul className='nav-bar'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/week1">Week1</Link>
          </li>
          <li>
            <Link to="/week2/">Week2</Link>
          </li>
          <li>
            <Link to="/week3/">Week3</Link>
          </li>
        </ul>
      <Route path="/" exact component={Home} />
      <Route path="/week1/" component={Week1} />
      <Route path="/week2/" component={Week2} />
      <Route path="/week3/" component={Week3} />
    </Router>
  );
}



export default App;
