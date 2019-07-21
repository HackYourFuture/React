import React from 'react';
import logo from './logo.svg';


function Home() {
  return (
    
   <div className="home">
      <header className="home-header">
        <h1>Hello!</h1>
        <img src={logo} className="home-logo" alt="logo" />
        </header>
    </div>
  );
}

export default Home;
