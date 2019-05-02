import React from 'react';

const Region = ({ region }) => {
  return (
    <table>
      <tr>
        <span role="img" aria-label="region">
          {' '}
          🌐
        </span>{' '}
        {region}
      </tr>
    </table>
  );
};
export default Region;
