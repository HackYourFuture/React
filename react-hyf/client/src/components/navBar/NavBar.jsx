import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div style={{ width: '60%', margin: 'auto' }}>
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/week1">Week-1</NavLink>
        </li>
        <li>
          <NavLink to="/week2">Week-2</NavLink>
        </li>
        <li>
          <NavLink to="/week3">Week-3</NavLink>
        </li>
      </ul>
      <hr style={{ width: '50%' }} />
    </div>
  );
}
