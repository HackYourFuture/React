import React from 'react';
import './App.css';
import RenderTodos from './components/PreviousHomework/RenderTodos/index.jsx';
import UserList from './components/Homework3/UserList/index';

function App() {
  return (
    <div className="App">
      <RenderTodos />
      <UserList />
    </div>
  );
}

export default App;
