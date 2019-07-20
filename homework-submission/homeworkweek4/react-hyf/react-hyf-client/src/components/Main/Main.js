import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = ({ elements }) => {
  const { Home, ...weeks } = elements;

  return (
    <main>
      <ul className="weeks">
        {Object.keys(weeks).map(key => (
          <li key={key}>
            <Link className="weeks-item" to={weeks[key].path}>
              {key}:{weeks[key].description}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
