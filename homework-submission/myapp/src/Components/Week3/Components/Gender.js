import React from 'react';
const Gender = ({ gender }) => {
  return (
    <div>
      <span role="img" aria-label="gender">
        👤
      </span>{' '}
      {gender}
    </div>
  );
};

export default Gender;
