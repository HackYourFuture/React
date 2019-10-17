import React from 'react';

function Spinner() {
  return (
    <div>
      <h3 style={{ color: 'white' }}>Choose a country and press Space to display a user</h3>
      <div className="loader">Loading...</div>
    </div>
  );
}

export default Spinner;
