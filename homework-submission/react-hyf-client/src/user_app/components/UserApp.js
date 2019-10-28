import React from 'react';
import './UserApp.css';
import AppContainer from './AppContainer';
import { UserProvider } from '../contexts/UserContext';

function UserApp() {
  return (
    <div className="UserApp">
      <UserProvider>
        <AppContainer />
      </UserProvider>
    </div>
  );
}

export default UserApp;
