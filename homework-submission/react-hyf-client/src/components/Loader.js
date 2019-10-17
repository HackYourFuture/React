import React from 'react';
import './UserName.css';
import './Loader.css';

const Loader = () => {
  return (
    <div className="Loader">
      <div className="Loader-Spinner spinner-border my-auto" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
