import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };
  return (
    <div>
      <h3 style={style}>
        <Link to="/week1">Week1</Link>
      </h3>
      <h3 style={style}>
        <Link to="/week2">Week2</Link>
      </h3>
      <h3 style={style}>
        <Link to="/week3">Week3</Link>
      </h3>
    </div>
  );
};

export default AppHeader;
