import React from 'react';
import './AppContainer.css';
import Navbar from './Navbar';
import UserCard from './UserCard';
import useKeyPress from '../hooks/useKeyPress';

function AppContainer() {
  const numberOfSpacePressed = useKeyPress();
  return (
    <div className="AppContainer">
      <Navbar />
      {numberOfSpacePressed === 0 && (
        <div className="App-Container-Header h-100 w-100 d-flex align-items-center">
          <h1 className="alert alert-primary w-50 mx-auto display-3 bg-transparent">
            Press Spacebar
          </h1>
        </div>
      )}
      {numberOfSpacePressed >= 1 && <UserCard />}
    </div>
  );
}

export default AppContainer;
