import React from 'react';
import './App.css';
import Layout from './hoc/Layout/layout';
import Routes from './routes';

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
