import React, { Fragment } from 'react';
import RouterContainer from './routes/RouterContainer';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Fragment>
        <RouterContainer />
      </Fragment>
      <Footer />
    </div>
  );
}

export default App;
