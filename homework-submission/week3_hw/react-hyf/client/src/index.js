import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import ErrorBoundary from './Errorboundray';
const destination = document.querySelector('#container');

ReactDom.render(
  <div>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </div>,
  destination,
);
