import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  background: #8e24aa;
  color: whitesmoke;
  display: flex;
  margin: 0;
  padding: 0.5rem;
  padding-left: 0;
  align-items: center;
  list-style: none;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  margin: 0;
  list-style: none;
  :hover {
    background: #ae2dd2;
  }
  padding: 0.5rem;
  font-weight: 300;
`;

const NavBar = () => {
  return (
    <Ul>
      <li>
        <Link to="/" exact>
          Home
        </Link>
      </li>
      <li>
        <Link to="/static-todo-list">Week 1</Link>
      </li>
      <li>
        <Link to="/dynamic-todo-list">Week 2</Link>
      </li>
      <li>
        <Link to="/api-call">Week 3</Link>
      </li>
    </Ul>
  );
};

export default NavBar;
