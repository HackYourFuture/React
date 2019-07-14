import React from 'react';

const Region = ({ region }) => {
  return (
    <div>
      <span role='img' aria-label='region'>
        {' '}
        🌐
      </span>{' '}
      {region}
    </div>
  );
};
export default Region;
