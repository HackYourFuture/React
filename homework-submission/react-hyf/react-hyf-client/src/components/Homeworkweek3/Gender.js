import React from 'react';
const Gender = ({ gender }) => {
  return (
    <table>
      <tr>
        <span role="img" aria-label="gender">
          👤
        </span>{' '}
        {gender}
      </tr>
    </table>
  );
};

export default Gender;
