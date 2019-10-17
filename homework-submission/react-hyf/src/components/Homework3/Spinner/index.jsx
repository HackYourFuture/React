import React from 'react';

function Spinner() {
  return (
    <div>
      <h2 style={{ color: 'white' }}>Press Space key to get/change a user</h2>
      <div className="loader">Loading...</div>
    </div>
  );
}

export default Spinner;
