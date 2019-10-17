import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppContainer />
      </UserProvider>
    </div>
  );
}

export default App;
