import React from 'react';
import './AppContainer.css';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import useKeyPress from '../hooks/useKeyPress';

function AppContainer() {
  const keyPressData = useKeyPress();
  return (
    <div className="AppContainer">
      <Navbar />
      {keyPressData === 0 && (
        <div className="App-Container-Header h-100 w-100 d-flex align-items-center">
          <h1 className="alert alert-primary w-50 mx-auto display-3 bg-transparent">
            Press Spacebar
          </h1>
        </div>
      )}
      {keyPressData >= 1 && <UserCard />}
    </div>
  );
}

export default AppContainer;
