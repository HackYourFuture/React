import React from 'react';
import './NotFound.css';

/**
 * A function component of the `NotFound` route
 * @return `h1` element contains the return text when the route doesn't match the specified routes
 */
const NotFound = () => {
  return (
    <div>
      <h1 className="not-found">404 Page Not Found</h1>
    </div>
  );
};

export default NotFound;
