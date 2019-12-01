import React from 'react';
import './App.css';
import Cities from './components/Cities';
import Form from './components/Form';

function App() {
  return (
    <div>
      <h1 className="header">Weather</h1>
      <Cities
        onSubmitForm={data => {
          console.log(data);
        }}
      />
    </div>
  );
}

export default App;
