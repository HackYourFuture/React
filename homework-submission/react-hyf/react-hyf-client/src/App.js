import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homework3 from './components/week3/Homework3';
import Homework1 from './components/week1/Homework1';
import Homework2 from './components/week2/Homework2';

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="mt-2 pb-4 divBorder">
        <h2 className="text-danger my-3 text-center">Homework 1</h2>
        <Homework1 />
      </div>

      <div className="mt-2 p-4 divBorder">
        <h2 className="text-danger my-3 text-center">Homework 2</h2>
        <Homework2 />
      </div>

      <div className="mt-4 pt-3">
        <h2 className="text-danger my-3 text-center">Homework 3</h2>
        <Homework3 />
      </div>
    </div>
  );
}

export default App;
