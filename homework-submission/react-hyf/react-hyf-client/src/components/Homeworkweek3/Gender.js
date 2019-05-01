import React from 'react';
const Gender = ({ gender }) => {
  return (
    <td>
      <span role="img" aria-label="gender">
        👤
      </span>{' '}
      {gender}
    </td>
  );
};

export default Gender;
