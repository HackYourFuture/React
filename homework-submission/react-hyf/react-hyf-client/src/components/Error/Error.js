import React from 'react';
import './Error.css';

const ErrorHandler = ({ error }) => (
  <p className="error">
    <span role="img" aria-label="error">
      ❌
    </span>
    Error: Oops! {error}
  </p>
);

export default ErrorHandler;
