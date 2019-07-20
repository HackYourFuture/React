import React from 'react';

import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/week1">Week1</Link>
        </li>
        <li>
          <Link to="/week2">Week2</Link>
        </li>
        <li>
          <Link to="/week3">Week3</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
