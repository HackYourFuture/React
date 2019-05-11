import React from 'react';
import './App.css';
import Layout from './components/Layout/layout';
import Routes from './components/Routes/routes';

function App() {
  return (
    <div className="App" id="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
