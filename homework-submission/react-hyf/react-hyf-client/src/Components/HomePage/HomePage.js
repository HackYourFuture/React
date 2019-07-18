import React from 'react';
import './HomePage.css';

/**
 * A function component of the `Home` route
 * @return paragraph element contains the text of the home page
 */
const HomePage = () => {
  return (
    <div>
      <p className="home-page">
        This is the <em>Home Page</em> of the React Module, where you can find everything about the
        Homeworks of this module
      </p>
    </div>
  );
};

export default HomePage;
